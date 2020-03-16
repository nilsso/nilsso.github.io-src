import numpy as np
from sys import argv

def hyperplanevectors(facet):
    a, b, c = facet[0], facet[1], facet[2]
    A, B = b-a, c-b
    return A, B
    # return A/np.gcd.reduce(A), B/np.gcd.reduce(B)

def normal(ab, bc):
    n = np.cross(ab, bc)
    # return n
    return n/np.gcd.reduce(n)

def hyperplane(n, point):
    d = n.dot(point)
    a, b, c = n
    return (a, b, c, d)

def halfspace(a, b, c, d, point):
    x, y, z = point
    lt = (a*x + b*y + c*z < d)
    if not lt:
        a, b, c, d = -np.array([a, b, c, d])
    s = 0
    # s = np.abs(d-1)
    return (a-s, b-s, c-s, d-s, lt)

def halfspacestring(a, b, c, d, lt):
    xs, ys, zs = '-' if a<0 else '', '-' if b<0 else '+', '-' if c<0 else '+'
    v = (
            '-' if a<0 else '',  '%d' % np.abs(a) if np.abs(a) != 1 else '',
            '-' if b<0 else '+', '%d' % np.abs(b) if np.abs(b) != 1 else '',
            '-' if c<0 else '+', '%d' % np.abs(c) if np.abs(c) != 1 else '', d
            )
    return '%s%sx %s %sy %s %sz <= %s' % v

def h1_helper(labels, facets, points):
    for label, facet, point in zip(labels, facets, points):
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

if __name__ == '__main__':
    if len(argv) == 1:
        # P
        a = np.array((1,0,0))
        b = np.array((0,1,0))
        c = np.array((-1,-1,0))
        d = np.array((0,0,1))
        e = np.array((0,0,-1))
        labels = ['abd', 'abe', 'acd', 'ace', 'bcd', 'bce']
        facets = [(a,b,d),(a,b,e),(a,c,d),(a,c,e),(b,c,d),(b,c,e)]
        points = [c,c,b,b,a,a]
        h1_helper(labels, facets, points)
    else:
        # P^\Delta
        a = np.array((1,1,1))
        b = np.array((1,1,-1))
        c = np.array((1,-2,1))
        d = np.array((1,-2,-1))
        e = np.array((-2,1,1))
        f = np.array((-2,1,-1))
        labels = ['abcd','ace','cdef','bdf','abef']
        facets = [(a,b,c,d),(a,c,e),(c,d,e,f),(b,d,f),(a,b,e,f)]
        points = [e,b,a,a,c]
        h1_helper(labels, facets, points)
