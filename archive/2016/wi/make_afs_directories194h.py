#!/usr/bin/python
# make directories and create permissions for CS194H, Winter 2015
import sys,os

# Define things for this quarter here
quarter = '15wi'
ta_accounts = ['landay', 'makikof'] 
groups = [
          dict(studio=    'behavior',
               name=      'token',
               logins=    ['ropeke', 'martinob', 'syong', 'janeta94']),

          dict(studio=    'learning',
               name=      'math_outside_the_box',
               logins=    ['kgomez', 'cvphelps', 'dnyoung', 'ashren']),

           dict(studio=    'learning',
               name=      'smartsenior',
               logins=    ['rcola', 'hollberg', 'magsko', 'rassanw']),

          dict(studio=    'information',
               name=      'ola',
               logins=    ['lbenoit', 'jcpark', 'jwomers', 'iholmes']),

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
