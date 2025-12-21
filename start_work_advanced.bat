@echo off
echo ================================================
echo Demarrage de l'environnement de developpement
echo ================================================
echo.

REM Charger la configuration si elle existe
if exist config.bat (
    call config.bat
) else (
    REM Configuration par defaut
    set WAMP_PATH=C:\wamp64\wampmanager.exe
    set WAMP_WAIT_TIME=15
    set AUTO_START_WAMP=1
)

REM Demarrage de WAMP
if %AUTO_START_WAMP%==1 (
    echo [1/3] Verification et demarrage de WAMP...

    REM Verifier si WAMP est deja en cours d'execution
    tasklist /FI "IMAGENAME eq wampmanager.exe" 2>NUL | find /I /N "wampmanager.exe">NUL
    if "%ERRORLEVEL%"=="0" (
        echo WAMP est deja en cours d'execution
    ) else (
        if exist "%WAMP_PATH%" (
            echo Demarrage de WAMP depuis %WAMP_PATH%
            start "" "%WAMP_PATH%"
            echo Attente du demarrage de WAMP (%WAMP_WAIT_TIME% secondes)...
            timeout /t %WAMP_WAIT_TIME% /nobreak >nul
        ) else (
            echo ATTENTION: WAMP introuvable a l'emplacement: %WAMP_PATH%
            echo Veuillez modifier le chemin dans config.bat
            echo.
            echo Voulez-vous continuer sans WAMP? (O/N)
            set /p CONTINUE=
            if /i not "%CONTINUE%"=="O" exit /b
        )
    )
    echo.
) else (
    echo [INFO] Demarrage automatique de WAMP desactive
    echo.
)

REM Demarrage du serveur Symfony API
echo [2/3] Lancement du serveur Symfony...
start "Symfony API Server" cmd /k "cd api && symfony server:start"

REM Attendre 2 secondes
timeout /t 2 /nobreak >nul

REM Demarrage du client npm
echo [3/3] Lancement du client npm...
start "NPM Dev Client" cmd /k "cd client && npm run dev"

echo.
echo ================================================
echo Environnement de developpement demarre
echo ================================================
echo.
if %AUTO_START_WAMP%==1 (
    echo [WAMP]   : http://localhost/phpmyadmin
)
echo [Symfony]: http://127.0.0.1:8000
echo [Client] : Verifier dans la fenetre npm
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
