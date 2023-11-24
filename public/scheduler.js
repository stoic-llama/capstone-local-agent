const json = {
    "title": "Schedule Heartbeat",
    // "description": "Check-in is available 2 to 24 hours prior to departure for all destinations. To complete the check-in process, please fill out the form below.",
    // "logo": "https://api.surveyjs.io/private/Surveys/files?name=ee96dc76-ecfb-4b17-8589-493015f1132a",
    // "logoWidth": "auto",
    // "logoHeight": "40",
    "completedHtml": "<div style=\"max-width:640px;text-align:center;margin:16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<p>Updating heartbeat schedule...</p>\n</div>\n\n</div>\n",
    "pages": [{
        "name": "Scheduler",
        "elements": [
            {
                "type": "text",
                "name": "freq",
                "width": "100%",
                "minWidth": "256px",
                "title": "Frequencing of Sending Heartbeat (cron format)",
                "titleLocation": "top",
                "description": "Heartbeat schedule must be stopped and started again to have updated frequency.",
                "placeholder": "*/15 * * * * *" 
            },
            {
                "type": "text",
                "name": "scheduledStatus",
                "width": "100%",
                "minWidth": "256px",
                "title": "Heartbeat Schedule Status (On | Off)",
                "titleLocation": "top",
                "readOnly": "true",
                "placeholder": "Off" 
            },
            {
                "type": "text",
                "name": "lastStart",
                "width": "100%",
                "minWidth": "256px",
                "title": "Last time heartbeat was started",
                "titleLocation": "top",
                "readOnly": "true",
                "placeholder": "Never Ever" 
            },
            {
                "type": "text",
                "name": "lastStop",
                "width": "100%",
                "minWidth": "256px",
                "title": "Last time heartbeat was stopped",
                "titleLocation": "top",
                "readOnly": "true",
                "placeholder": "Never Ever" 
            },
        ]    
    }],
  
    "showQuestionNumbers": "off",
    // "questionDescriptionLocation": "underInput",
    "questionErrorLocation": "bottom",
    "completeText": "Update",
    "widthMode": "static",
    "width": "860",
    "fitToContainer": true,
    "headerView": "advanced" 
};

const themeJson = {
// "backgroundImage": "https://api.surveyjs.io/private/Surveys/files?name=0e692c99-8fa6-4f8b-b06e-ded5f714d0c8",
"backgroundImage" : "./assets/forest.png",
"backgroundImageFit": "cover",
"backgroundImageAttachment": "fixed",
"backgroundOpacity": 0.75,
"cssVariables": {
    "--sjs-general-backcolor": "rgba(0, 0, 255, 0.25)",
    "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
    "--sjs-general-backcolor-dim": "#197CE6",
    "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
    "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
    "--sjs-primary-backcolor": "rgba(4, 91, 185, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-primary-backcolor-dark": "rgba(4, 91, 185, 0.75)",
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-base-unit": "8px",
    "--sjs-corner-radius": "4px",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small": "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner": "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    "--sjs-border-light": "rgba(255, 255, 255, 0.15)",
    "--sjs-border-default": "rgba(0, 0, 0, 0.25)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-article-font-xx-large-textDecoration": "none",
    "--sjs-article-font-xx-large-fontWeight": "700",
    "--sjs-article-font-xx-large-fontStyle": "normal",
    "--sjs-article-font-xx-large-fontStretch": "normal",
    "--sjs-article-font-xx-large-letterSpacing": "0",
    "--sjs-article-font-xx-large-lineHeight": "64px",
    "--sjs-article-font-xx-large-paragraphIndent": "0px",
    "--sjs-article-font-xx-large-textCase": "none",
    "--sjs-article-font-x-large-textDecoration": "none",
    "--sjs-article-font-x-large-fontWeight": "700",
    "--sjs-article-font-x-large-fontStyle": "normal",
    "--sjs-article-font-x-large-fontStretch": "normal",
    "--sjs-article-font-x-large-letterSpacing": "0",
    "--sjs-article-font-x-large-lineHeight": "56px",
    "--sjs-article-font-x-large-paragraphIndent": "0px",
    "--sjs-article-font-x-large-textCase": "none",
    "--sjs-article-font-large-textDecoration": "none",
    "--sjs-article-font-large-fontWeight": "700",
    "--sjs-article-font-large-fontStyle": "normal",
    "--sjs-article-font-large-fontStretch": "normal",
    "--sjs-article-font-large-letterSpacing": "0",
    "--sjs-article-font-large-lineHeight": "40px",
    "--sjs-article-font-large-paragraphIndent": "0px",
    "--sjs-article-font-large-textCase": "none",
    "--sjs-article-font-medium-textDecoration": "none",
    "--sjs-article-font-medium-fontWeight": "700",
    "--sjs-article-font-medium-fontStyle": "normal",
    "--sjs-article-font-medium-fontStretch": "normal",
    "--sjs-article-font-medium-letterSpacing": "0",
    "--sjs-article-font-medium-lineHeight": "32px",
    "--sjs-article-font-medium-paragraphIndent": "0px",
    "--sjs-article-font-medium-textCase": "none",
    "--sjs-article-font-default-textDecoration": "none",
    "--sjs-article-font-default-fontWeight": "400",
    "--sjs-article-font-default-fontStyle": "normal",
    "--sjs-article-font-default-fontStretch": "normal",
    "--sjs-article-font-default-letterSpacing": "0",
    "--sjs-article-font-default-lineHeight": "28px",
    "--sjs-article-font-default-paragraphIndent": "0px",
    "--sjs-article-font-default-textCase": "none",
    "--sjs-article-font-xx-large-fontSize": "64px",
    "--sjs-article-font-x-large-fontSize": "48px",
    "--sjs-article-font-large-fontSize": "32px",
    "--sjs-article-font-medium-fontSize": "24px",
    "--sjs-article-font-default-fontSize": "16px",
    "--sjs-question-background": "rgba(255, 255, 255, 1)",
    "--font-family": "Open Sans",
    "--sjs-questionpanel-cornerRadius": "8px",
    "--sjs-editor-background": "rgba(255, 255, 255, 1)",
    "--sjs-editorpanel-hovercolor": "rgba(4, 91, 185, 1)",
    "--sjs-editorpanel-cornerRadius": "3px",
    "--sjs-font-pagetitle-color": "rgba(255, 255, 255, 1)",
    "--sjs-font-editorfont-color": "rgba(0, 0, 0, 0.9)",
    "--sjs-font-editorfont-placeholdercolor": "rgba(0, 0, 0, 0.5)",
    "--sjs-font-questiontitle-color": "rgba(255, 255, 255, 1)",
    "--sjs-font-questiondescription-color": "rgba(255, 255, 255, 0.75)",
    "--sjs-questionpanel-hovercolor": "rgba(255, 255, 255, 0.15)",
    "--sjs-font-questiontitle-weight": "700",
    "--sjs-font-questiontitle-size": "14px",
    "--sjs-font-questiondescription-size": "14px",
    "--sjs-font-editorfont-size": "14px",
    "--sjs-header-backcolor": "trasparent",
    "--sjs-font-headertitle-color": "rgba(255, 255, 255, 1)",
    "--sjs-font-headertitle-size": "24px",
    "--sjs-font-headerdescription-color": "rgba(255, 255, 255, 1)",
    "--sjs-font-headerdescription-size": "14px",
    "--sjs-font-headerdescription-weight": "600",
    "--sjs-questionpanel-backcolor": "rgba(0, 0, 0, 0.70)" },

"themeName": "default",
"colorPalette": "light",
"isPanelless": false,
"header": {
    "height": 176,
    "textAreaWidth": 424,
    "logoPositionX": "right",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom" } 
};

function SurveyComponent() {
    // initiate SurveyJS
    const survey = new Survey.Model(json);
    survey.applyTheme(themeJson);

    // TODO: Look into webpack or nunjucks to add env variable dynamically 
    // in static assets in express
    let domain = 'helpmybabies.com'
    console.log(domain)

    // Prequisite Setup for Existing Form for Auto-Populate
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(`http://${domain}:5900/api/v1/readScheduler`, requestOptions)
        .then(response => response.text())
        .then(result => survey.data = JSON.parse(result))
        .catch(error => console.log('error', error));

    // post survey actions
    survey.onComplete.add((sender, options) => {        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify(sender.data);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        fetch(`http://${domain}:5900/api/v1/scheduler`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(() => {
            // Pause 3 seconds before refreshing page
            setTimeout(() => {
                location.reload()
            }, 3000)
        })
        .catch(error => console.log('error', error));
    });

    survey.addNavigationItem({
        id: "sv-nav-startjob",
        title: "Start Job",
        action: () => survey.startJob(survey.data),
        css: "nav-button",
        innerCss: "sd-btn nav-input"
    });

    survey.addNavigationItem({
        id: "sv-nav-stopJob",
        title: "Stop Job",
        action: () => survey.stopJob(survey.data),
        css: "nav-button",
        innerCss: "sd-btn nav-input"
    });

    survey.addNavigationItem({
        id: "sv-nav-cancel",
        title: "Cancel",
        action: () => {
            // Redirect to home page
            window.location.href = `http://${domain}:5900/`
        },
        css: "nav-button",
        innerCss: "sd-btn nav-input"
    });

    /*******************
     * Start Job Logic *
     *******************/
    survey.startJob = function(surveyData) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({freq: surveyData.freq});
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`http://${domain}:5900/api/v1/startJob`, requestOptions)
        .then(response => response.json()) // resolve promise to javascript object
        .then(result => {
            survey.updateSchedulerAfterStart(survey.data, result.timestamp) // returns undefined
        })  
        .then(() => {
            // Pause 3 seconds before refreshing page
            setTimeout(() => {
                location.reload()
            }, 3000)        
        })
        .catch(error => console.log('error', error));
    }

    survey.updateSchedulerAfterStart = function(surveyData, timestamp) {  
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({
            "freq": surveyData.freq,
            "scheduledStatus": 'On',
            "lastStart": timestamp,
            "lastStop": '',
        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`http://${domain}:5900/api/v1/scheduler`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    /******************
     * Stop Job Logic *
     ******************/
    survey.stopJob = function() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${domain}:5900/api/v1/stopJob`, requestOptions)
        .then(response => response.json()) // resolve promise to javascript object
        .then(result => {
            survey.updateSchedulerAfterStop(survey.data, result.timestamp, "Off") // returns undefined
        })  
        .then(() => {
            // Pause 3 seconds before refreshing page
            setTimeout(() => {
                location.reload()
            }, 3000)        
        })
        .catch(error => console.log('error', error));
    }

    survey.updateSchedulerAfterStop = function(surveyData, timestamp) {  
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let data = JSON.stringify({
            "freq": surveyData.freq,
            "scheduledStatus": 'Off',
            "lastStart": '',
            "lastStop": timestamp,
        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`http://${domain}:5900/api/v1/scheduler`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return /*#__PURE__*/React.createElement(SurveyReact.Survey, { model: survey });
}

  
const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render( /*#__PURE__*/React.createElement(SurveyComponent, null));