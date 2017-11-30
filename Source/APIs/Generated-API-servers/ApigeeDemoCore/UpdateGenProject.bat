@echo This will update the generated project and overwrite it. Do you want to continue?
@echo off

@echo Setting up local environment env_variables
setlocalenvvar.bat

@echo Installing required npm modules...
cd nodejs-server-server
npm install --save restler
