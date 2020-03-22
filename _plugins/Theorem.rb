module Jekyll
    class Theorem < Liquid::Block
        @@HEADERS = {
            't' => 'Theorem',
            'p' => 'Proposition',
            'l' => 'Lemma',
            'c' => 'Corollary',
            'd' => 'Definition'
        }
        @@HEADERS.default_proc = -> (_hash, key) { key }

        @@CLASSES = {
            't' => ' thm-theorem',
            'p' => ' thm-proposition',
            'l' => ' thm-lemma',
            'c' => ' thm-corollary',
            'd' => ' thm-definition'
        }
        @@CLASSES.default = ''

        def initialize(tag_name, params, tokens)
            super
            matches = params.match(/(?:(\w)\s+)(?:(.*?)\s+$)?/)
            if matches
                header_key, name = matches.captures
                @header =
                    '<h4 class="no_toc">' + @@HEADERS[header_key] +
                    (name ? ' (%s)' % name : '') + '</h4>'
                @class = 'thm' + @@CLASSES[header_key]
            else
                @header = ''
                @class = 'thm'
            end
        end

        def render(context)
            content = super
            site = context.registers[:site]
            converter = site
                .find_converter_instance(
                    ::Jekyll::Converters::Markdown)
            <<-HTML.gsub /^\s+/, ''
            <div class='#{@class}'>
            #{@header}
            #{converter.convert(content)}
            </div>
            HTML
        end
    end
end

Liquid::Template.register_tag('thm', Jekyll::Theorem)
