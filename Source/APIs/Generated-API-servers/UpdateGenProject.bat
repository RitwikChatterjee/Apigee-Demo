@echo off

REM Setting initial values
SET cdir=%CD%
set files2bkup[0]="index.js"
set files2bkup[1]="package.json"
set files2bkup[2]="controllers\*Service.js"


REM Get user confirmation to continue
SET /P conf=This will update the generated project and overwrite it. Do you want to continue?[Iconfirm]
IF NOT "%conf%" == "Iconfirm" GOTO Quit
@echo Continuing...

REM Capture settings
SET /P wkdir=Set work directory relative to the current directory:[./abc]
SET /P newgenzip=Name of the new generated zip file:[abc.zip]
SET /P extfolder=Name of the extraction folder:

@echo " "
@echo Confirm the following settings:
@echo " "
@echo Work directory: %wkdir%
@echo New zip file:   %newgenzip%
@echo Extraction folder: %extfolder%
@echo " "
SET /P conf= Do you want to continue?[Yes]
IF NOT "%conf%" == "Yes" or "%conf%" == "yes" GOTO Quit
@echo Continuing...

REM 1. Go to work directory
cd %wkdir%
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_HANDLER
REM 2. Take a backup
xcopy /s /i /y %extfolder% %extfolder%_bkup
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_HANDLER
REM 3. Extract the zip file
"C:\Program Files\7-Zip\7z" x %newgenzip% -y
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_HANDLER
REM 4. Rename files in generated code
@echo Backing up files to be overwritten
for /F "tokens=2 delims==" %%s in ('set files2bkup[') do copy %extfolder%\%%s %extfolder%\%%s.bkup
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_HANDLER
REM 5. Overwrite files from old directory
@echo Overwriting the files
for /F "tokens=2 delims==" %%s in ('set files2bkup[') do copy %extfolder%_bkup\%%s %extfolder%\%%s
IF %ERRORLEVEL% NEQ 0 GOTO ERROR_HANDLER

GOTO End

:ERROR_HANDLER
@echo Error occurred!! Quiting
GOTO End

:Quit
@echo Quiting
:End
cd %cdir%
set cdir=
set conf=
set wkdir=
set newgenzip=
set extfolder=
set files2bkup[0]=
set files2bkup[1]=
set files2bkup[2]=
