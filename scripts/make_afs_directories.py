#!/usr/bin/python
import sys,os,csv

# Expects a file in current directory called teams.csv
# Should be formatted with the following fields:
# studio
# title (this is the team name)
# logins (member1, member2, member3, member4)
# you can directly download from Google Spreadsheets
# and just change the field names

# Define things for this quarter here
quarter = '16au'
ta_accounts = ['landay',
               'wkim1',
               'katg',
               'skleung',
               'ashngu',
               'edpark',
               'sraghven',
               'emjtang',
               'johnys',
               'kzhai']

# DEBUG ONLY:
# for group in groups:
#     print(group)

# Set up container directory
webdir = '/afs/ir/class/cs147/WWW/projects'
if not os.path.exists(webdir): os.mkdir(webdir)
os.system('chmod a+r ' + webdir)

# CAREFUL
# This deletes everything in the current CS 147 WWW directory
# os.system('rm -r -f ' + webdir + './*')

def make_group_data(row):
    group = {}
    group['studio'] = row['studio']
    group['title'] = row['title']
#    group['tagline'] = row['tagline']

    # Create logins as list
    logins = []
    logins.append(row['member1'])
    logins.append(row['member2'])
    if (row['member3']):
        logins.append(row['member3'])
    if (row['member4']):
        logins.append(row['member4'])
    group['logins'] = logins
    return group


def make_group_directory(studio, title, logins=None):
    studio = ('').join(e for e in studio if e.isalpha()) 
    title = ('').join(e for e in title if e.isalpha())
    studio = ('_').join(studio.split())
    title = ('_').join(title.split())

    projectDir = webdir + "/" + studio + "/" + title;

    if not os.path.exists(studio): os.system('mkdir %s' % studio)
    os.chdir(studio)

    if not os.path.exists(title): os.system('mkdir %s' % title)
    os.chdir(title)

    for login in logins + ta_accounts:
        print ('Giving %s permission to read/write %s' % (login, projectDir))
        os.system('fs sa %s %s write' % (projectDir, login));

    os.chdir(webdir)

groups = []
with open('teams.csv', 'rb') as csvfile:
    teamreader = csv.DictReader(csvfile)
    for row in teamreader:
        group = make_group_data(row)
        groups.append(group)



for group in groups:
    make_group_directory(**group)
