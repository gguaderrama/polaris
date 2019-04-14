#!/usr/bin/python
import sys
with open('deployment-prod.yml', 'r') as file :
  filedata = file.read()
filedata = filedata.replace('PROD_VERSION', str(sys.argv[1]))
with open('deployment-prod.yml', 'w') as file:
  file.write(filedata)