#!/usr/bin/env python

import re
import os
import shutil
import argparse

parser = argparse.ArgumentParser()
group = parser.add_mutually_exclusive_group(required=True)
group.add_argument('-i', action='store_true')
group.add_argument('-o', action='store_true')
parser.add_argument('num')
args = parser.parse_args()

N = int(args.num) 

drivepath = os.getcwd()+'/drive'
tmppath = os.getcwd()+'/tmp'

in_or_out = args.i
# i.e. To move files from drive to tmp or graded files from temp to drive

nums = [
        'One', 'Two', 'Three', 'Four', 'Five',
        'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve' ]

dirpattern = re.compile(
        r'([A-Za-z\-]+) ([A-Za-z\-]+)')

snums = '|'.join(nums)

filepattern = re.compile(
        r'(\d+'+('' if not snums else ('|'+snums+'|'+snums.lower()))+').*\.(ipynb|pdf)')

gradedpattern = re.compile(
        r'([A-Za-z\-]+)_([A-Za-z\-]+)_Assignment\d+_graded.*')

nums = [n.lower() for n in nums]

def check_num(t):
    n = None
    try:
        n = int(t)
    except:
        n = nums.index(t)+1
    return n

if in_or_out:
    # Copy files from drive to tmp
    for dirname in os.listdir(drivepath):
        m = dirpattern.search(dirname)
        if not m:
            continue
        last, first = m.groups()
        studentdirpath = drivepath+'/'+dirname
        for filename in os.listdir(studentdirpath):
            m = filepattern.search(filename)
            if not m:
                continue
            n = check_num(m.group(1).lower())
            suffix = m.group(2).lower()
            if n is N:
                filepath = studentdirpath+'/'+filename
                out = (last+'_'+first+'_Assignment%02d.'+suffix) % n
                # print("%s\n%s\n" % (filepath, out))
                # shutil.copyfile(filepath, './tmp/'+out)
else:
    # Copy graded files from tmp to drive
    for filename in os.listdir(tmppath):
        m = gradedpattern.search(filename)
        if not m:
            continue
        last, first = m.groups()
        m = None
        for dirname in os.listdir(drivepath):
            m = dirpattern.search(dirname)
            if not m:
                continue
            if m.groups() == (last, first):
                inpath = tmppath+'/'+filename
                outpath = drivepath+'/'+dirname+'/'+filename
                # outpath = drivepath+'-test/'+dirname+'/'+filename
                # print(last, first)
                # print('inpath', inpath)
                # print('outpath', outpath)
                # print("")
                # shutil.copyfile(inpath, outpath)

