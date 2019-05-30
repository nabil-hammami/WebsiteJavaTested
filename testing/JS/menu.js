function createMenu() {
    // 2D Array declaration
    let menuElements = [[], []];

    // Array initialisation
    menuElements[0] = ['menu_home', './HTML/home.html', 'Home'];
    menuElements[1] = ['menu_projects', './HTML/projects.html', 'Projects'];
    menuElements[2] = ['menu_roadmap', './ROADMAP/roadmap.html', 'Roadmap'];
    menuElements[3] = ['menu_latestTestResult', './REPORTS/cucumber_report.html', 'Latest test results'];
    menuElements[4] = ['menu_logBook', './HTML/logBook.html', 'Logbook'];

    let i = 0;
    do {
        let content = document.createTextNode(menuElements[i][2]);
        let elementA = document.createElement("a");
        let elementH3 = document.createElement("h3");
        let pageElement = document.getElementById("nav-menu");
        elementA.appendChild(content);
        elementA.setAttribute("id", menuElements[i][0]);
        elementA.setAttribute("class","mainMenu");
        elementA.setAttribute("href", menuElements[i][1]);
        elementA.setAttribute("target", "mainFrame");
        elementH3.appendChild(elementA);
        pageElement.appendChild(elementA);
        i++;
    }
    while (i < menuElements.length);
}

function init() {
    document.getElementById("menu_home").click();
}

