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
            header_key, name = params.match(/(?:(\w)\s+)(?:(.*?)\s+$)?/).captures
            @header = '<h4>' + @@HEADERS[header_key] + (name ? ' (%s)' % name : '') + '</h4>'
            @class = 'thm' + @@CLASSES[header_key]
        end

        def render(context)
            content = super

            <<-HTML.gsub /^\s+/, ''
            <div class='#{@class}'>
            #{@header}
            #{content}
            </div>
            HTML
        end
    end
end

Liquid::Template.register_tag('thm', Jekyll::Theorem)
