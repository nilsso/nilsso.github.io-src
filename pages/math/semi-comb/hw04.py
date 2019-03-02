import numpy as np

a = np.array((1,0,0))
b = np.array((0,1,0))
c = np.array((-1,-1,0))
d = np.array((0,0,1))
e = np.array((0,0,-1))

labels = ['abd', 'abe', 'acd', 'ace', 'bcd', 'bce']
facets = [(a,b,d),(a,b,e),(a,c,d),(a,c,e),(b,c,d),(b,c,e)]

def hyperplanevectors(facet):
    a, b, c = facet
    return b-a, c-b

def normal(ab, bc):
    return np.cross(ab, bc)

def hyperplane(n, point):
    d = n.dot(point)
    a, b, c = n
    return (a, b, c, d)

def halfspace(a, b, c, d, point):
    x, y, z = point
    lt = (a*x + b*y + c*z < d)
    return (a, b, c, d, lt)

def halfspacestring(a, b, c, d, lt):
    xs, ys, zs = '-' if a<0 else '', '-' if b<0 else '+', '-' if c<0 else '+'
    v = (
            '-' if a<0 else '',  str(np.abs(a)) if np.abs(a)>1 else '',
            '-' if b<0 else '+', str(np.abs(b)) if np.abs(b)>1 else '',
            '-' if c<0 else '+', str(np.abs(c)) if np.abs(c)>1 else '',
            '<=' if lt else '>=', d
            )
    return '%s%sx %s %sy %s %sz %s %s' % v

for label, facet, point in zip(labels, facets, [c,c,b,b,a,a]):
    ab, bc = hyperplanevectors(facet)
    n = normal(ab, bc)
    hs = halfspace(*hyperplane(n, facet[0]), point)
    hsS = halfspacestring(*hs)
    print('''\
%s: %s
    v1 = %s
    v2 = %s
     n = %s
    hs = %s
''' % (label, hsS, ab, bc, n, hs))

