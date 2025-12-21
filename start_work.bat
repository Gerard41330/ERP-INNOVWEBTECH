@echo off
REM Se placer dans le dossier du script pour garantir que les chemins relatifs fonctionnent
cd /d "%~dp0"

echo ================================================
echo Demarrage de l'environnement de developpement
echo ================================================
echo.

REM Demarrage de WAMP
echo [1/3] Verification et demarrage de WAMP...

REM Chemins possibles de WAMP (ajustez selon votre installation)
set WAMP_PATH_1=C:\wamp64\wampmanager.exe
set WAMP_PATH_2=C:\wamp\wampmanager.exe
set WAMP_PATH_3=D:\wamp64\wampmanager.exe

REM Verifier si WAMP est deja en cours d'execution
tasklist /FI "IMAGENAME eq wampmanager.exe" 2>NUL | find /I /N "wampmanager.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo WAMP est deja en cours d'execution
) else (
    REM Essayer de demarrer WAMP depuis les chemins possibles
    if exist "%WAMP_PATH_1%" (
        echo Demarrage de WAMP depuis %WAMP_PATH_1%
        start "" "%WAMP_PATH_1%"
    ) else if exist "%WAMP_PATH_2%" (
        echo Demarrage de WAMP depuis %WAMP_PATH_2%
        start "" "%WAMP_PATH_2%"
    ) else if exist "%WAMP_PATH_3%" (
        echo Demarrage de WAMP depuis %WAMP_PATH_3%
        start "" "%WAMP_PATH_3%"
    ) else (
        echo ATTENTION: WAMP n'a pas ete trouve aux emplacements par defaut
        echo Veuillez demarrer WAMP manuellement
        pause
    )
    REM Attendre que WAMP demarre completement
    echo Attente du demarrage de WAMP (15 secondes)...
    timeout /t 15 /nobreak >nul
)

echo.

REM Demarrage du serveur Symfony API
echo [2/3] Lancement du serveur Symfony...
start "Symfony API Server" cmd /k "cd api && symfony server:start"

REM Attendre 2 secondes pour laisser le temps au serveur Symfony de demarrer
timeout /t 2 /nobreak >nul

REM Demarrage du client npm
echo [3/3] Lancement du client npm...
start "NPM Dev Client" cmd /k "cd client && npm run dev"

echo.
echo ================================================
echo Environnement de developpement demarre
echo ================================================
echo.
echo [WAMP]   : http://localhost/phpmyadmin
echo [Symfony]: http://127.0.0.1:8000
echo [Client] : Verifier dans la fenetre npm
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
