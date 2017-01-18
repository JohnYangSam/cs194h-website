#!/usr/bin/python
# make directories and create permissions for CS194H, Winter 2016
# NOTE: You will need to run this on corn.stanford.edu (myth.stanford.edu does not have fsr)
import sys,os

# Define things for this quarter here
quarter = '16wi'
ta_accounts = ['landay', 'johnys', 'emjtang']
groups = [
	dict(studio=    'teams',
	   name=      'enGauge',
	   logins=    ['ajanahi', 'mvachovs', 'tvachov', 'trzhao']),
	dict(studio=    'teams',
	   name=      'Meetchewthere',
	   logins=    ['mdoshi1', 'bronwyn1', 'alegre', 'svnathan']),
	dict(studio=    'teams',
	   name=      'Musit',
	   logins=    ['jgeary','juanm95', 'mwilson8', 'jwolens']),
	dict(studio=    'teams',
	   name=      'SignAlong',
	   logins=    ['filippak', 'mrpeters', 'nschager', 'cwhite05']),
	dict(studio=    'teams',
	   name=      'SkillSwap',
	   logins=    ['cjones94', 'dkm0713', 'breyes28', 'ctjoa'])
]

# Set up container directory. Change fsr to fs if you don't want to give permission to subdirectories.
webdir = '/afs/.ir/class/cs194h/WWW/projects'
studiodir = '/afs/.ir/class/cs194h/WWW/studio'
if not os.path.exists(webdir): os.mkdir(webdir)
os.system('chmod a+r ' + webdir)

if not os.path.exists(studiodir): os.mkdir(studiodir)
os.system('chmod a+r ' + studiodir)

def make_group(studio, name, logins=None):
    projectDir = webdir + "/" + name
    if not os.path.exists(projectDir):
	print ('Making a project directory for %s' % name)
	os.mkdir(projectDir)
    for login in logins + ta_accounts:
        print ('Giving %s permission to read/write %s' % (login, projectDir))
        os.system('fsr sa %s %s write' % (projectDir, login))
        loginStudioDir = studiodir + "/" + login
        if not os.path.exists(loginStudioDir):
                print ('Making a studio directory for %s' % login)
                os.mkdir(loginStudioDir)
        print ('adding write permisions to %s for %s' % (loginStudioDir, login))
        print ('')
        os.system('fsr sa %s %s write' % (loginStudioDir, login))
    os.chdir(webdir)



for group in groups:
    make_group(**group)
