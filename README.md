# Launch Flow in Modal

**As of:** Summer'21

**Authored By:** George Abboud

**Last Updated:** 09/09/2021

* * *


# Overview:  

[image](https://user-images.githubusercontent.com/8514282/153292662-126aa606-876c-49df-bb8a-0e60baec53c4.gif)
AppExchange Listing:  
https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FMYinUAH

Open-Source Code:
https://github.com/salesforce-experiencecloud/LaunchFlowInModal


## Description:

Ever built a great flow that facilitates the creation of a case, or submitting feedback on a page, or maybe enables a partner to quickly register a deal; and wished you could launch said flows for your users to complete these actions without navigating them off the page they are looking at?
With the Launch Flow in Modal lightning component, you can do just that! With options to render a button and launch your flow upon that button's click, and being able to auto-launch the flow as the component renders on the page - all in a modal so not to interrupt your users' navigation! 

### Disclaimer:

This package is free to use, but is not an official [salesforce.com](http://salesforce.com/) product, and should be considered a community project. The functionality is not officially tested or documented, and does not come with any support, warrantees, or updates. It is offered as-is.

## What?

Lightning Component that allows users to launch flows in a modal, without having to leave the page they're on!

## Why?

Currently, there are no out-of-the-box components that offer the same user experience in launching a flow in a modal. There have been many use-cases that surfaced the need for such functionality to maintain a high user experience and allow users to complete actions, create records, and go through guided flows without leaving the current page they are viewing.

## Where?

Can be used on any lightning page.

## How?

1. Install unmanaged package
2. From builder, go to a lightning page and drag the “Launch Flow in Modal” component anywhere on the page 
3. Configure the component **[sf_flowmodal:ccp_launchFlowModal]** as follows:
    1. **Flow Name [flowName]:** Required - Set the value to the API name of the flow you wish to launch.
    2. **Flow Modal Header [flowModalHeader]:** Text to display in the header of the modal.
    3. **Flow Input Variables [flowInputVariablesString]:** JSON string to, optionally, pass input variables to the flow. The JSON structure / variables should follow the following:
        1. Community Builder example:
            1.  `[
                  {
                     "name" : "testInput1", "type" : "String", "value": "{!recordId}" 
                  },
                `  {
                     "name" : "testInput2", "type" : "Boolean", "value": "false" 
                  }`
                ]`
        2. LEX App Builder example (_RECORDID_ is case insensitive):
            1. `[
                  {
                     "name" : "testInput1", "type" : "String", "value": "_RECORDID_" 
                  },
                `  {
                     "name" : "testInput2", "type" : "Boolean", "value": "false" 
                  }`
                ]`
    4. **Auto Launch Flow [autoLaunchFlow]:** Check to launch the flow right after the component renders.
    5. **Hide Button [hideButton]:** Check to hide the button (no UI). Assumed to be used with Auto Launch Flow checked if you only want to have the flow auto launch upon rendering and not allow the user to click and launch the flow themselves.
    6. **Button Label [buttonLabel]:** Text to use for the button label.
    7. **Button Alignment [align]:** Choose how to align the button in its container.
    8. **Button Background Color [buttonBackgroundColor]:** Leave empty to inherit the branding styles from the branding editor in Community Builder, or provide a CSS color to set the button background color to.
    9. **Button Text Color [buttonTextColor]:** Leave blank if you want the button to inherit the default brand color, otherwise specify a CSS color.
    10. **Button Size [buttonTextSize]:** CSS Text size for button. Leave blank if you want the button text to inherit the default size, otherwise specify a size value.
    11. **Hide Flow Transition Overlay [hideFlowTransitionOverlay]:** Check to hide the flow transition overlay that flashes when moving from one step in the flow to another.
    12. **Refresh Page on Flow Completion [refreshPageOnFlowCompletion]**: Checking this box will refresh the page upon completion of the flow.
    13. **Redirect to Url on Flow Completion [redirectUrlOnFlowCompletion]**: Url to redirect to upon flow completion. This setting will override the Refresh Page on Flow Completion setting.
    14. **Hide Modal Close Button [hideModalCloseButton]:** Check to hide the modal close button (“X”)
    15. **Render Modal Footer [renderFooter]:** Check to render the footer, which currently only contains a close button.
    16. **Text for Close button in footer [closeButtonText]:** The text for the Close button in the footer
    17. **Apply Card Background [applyCardBackground]:** Checking this box will apply the slds card background.
    18. **Fixed Modal Width / Height [fixedModalWidthHeight]:** Checking this box will apply a fixed width and height to the modal, based on the specified width and height.
    19. **Fixed Modal Width [modalWidth]:** The width value for the fixed modal width / height mode.
    20. **Fixed Modal Height [modalHeight]:** The height value for the fixed modal width / height mode.
    21. **Fixed Button Width / Height [fixedButtonWidthHeight]:** Checking this box will apply a fixed width and height to the button, based on the specified width and height.
    22. **Fixed Button Width [buttonWidth]:** The width value for the fixed button width / height mode.
    23. **Fixed Button Height [buttonHeight]:** The height value for the fixed button width / height mode.
    24. **Button Border Radius [buttonBorderRadius]:** The radius value for the button.




## Release Log:

### Version 1.14

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003VsuM 

* Fixed a bug with relaxedCSP and locker service being turned off in an Experience Cloud site using this component.



### (DEPRECATED) Version 1.13

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003VssL 

* Added the relaxedCSP interface to the component so it is compatible with experience cloud sites with a relaxed CSP config.



### (DEPRECATED) Version 1.12

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003VssG

* Added property to set the button border radius
* Fix for error with access check on attribute that wasn’t defined



### (DEPRECATED) Version 1.10

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003VsVW 

* Added property to set the close button text in the modal footer



### (DEPRECATED) Version 1.9

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003VsJY 

* Option to render footer, which currently only displays a close button




### (DEPRECATED) Version 1.8

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003VsBs 

* Option to set fixed width and height of modal
* Option to set fixed  width and height of button
* Option to set button text size
* Option to apply slds-card class as background to the button



### (DEPRECATED) Version 1.7

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003obYm 

* Fix for center alignment not applying branding background to button
* Support for hiding / showing close button for the modal



### (DEPRECATED) Version 1.6

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003obYh

* Updated component to allow for an option to redirect to a url upon flow completion

### (deprecated) Version 1.5

Installation URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003oaKd 

* Updated component to allow for an option to reload the page upon flow completion

### (deprecated) Version 1.4

Installation URL: http://sfdc.co/LaunchFlowInModal

* Updated component to allow for changing the button text color

### (deprecated) Version 1.3

Installation URL: http://sfdc.co/LaunchFlowInModal

* Updated component to show up in list of components available for home pages

### (deprecated) Version 1.2

Installation URL: http://sfdc.co/LaunchFlowInModal

* Added option for button to either inherit branding when within communities from branding editor, or override button color with a CSS Color code
* Added option to hide transition overlay when moving from one step to another in a flow

### (deprecated) Version 1.1

Installation URL: http://sfdc.co/LaunchFlowInModal

* Updated for compatibility with recordId variable substitution in LEX due to limitation in LEX for using merge fields for record Ids. _RECORDID_ (Case Insensitive) now will get substituted for the recordId populated on a detail page in LEX

### (deprecated) Version 1.0

Installation URL: http://sfdc.co/LaunchFlowInModal

* Initial Release

