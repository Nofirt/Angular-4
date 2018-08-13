// functions file
window.globalState = {}

function main(appState) {
    window.globalState = appState;
    localStorage.setItem(appState);
}