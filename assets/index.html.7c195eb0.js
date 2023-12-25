import{_ as r,r as s,o as d,c,a as e,b as t,d as i,w as l,e as n}from"./app.5efc5573.js";const u={},h=n('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>iOS and iPadOS devices can typically only update to firmware versions which Apple has &quot;signed&quot;. This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.</p><p>Fortunately, we can use different &quot;profiles&quot; to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.</p><p>This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:</p><ul><li><strong>16.6.1 (For devices on 14.4.2 or earlier that got 17)</strong> - December 17th, 2023</li><li><strong>16.6.1 (All other devices)</strong> - December 20th, 2023</li><li><strong>17.0</strong> - December 20th, 2023</li><li><strong>17.0.1</strong> - December 25th, 2023</li><li><strong>17.0.2</strong> - January 2nd, 2024</li></ul>',5),p=e("code",null,"UTC 00:00",-1),g={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},v={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"TIP",-1),f=n('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you previously attempted an older blobless method, remove all delay and beta profiles prior to following this method.</p></div><h2 id="installing-supervise" tabindex="-1"><a class="header-anchor" href="#installing-supervise" aria-hidden="true">#</a> Installing Supervise</h2><h3 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h3>',3),y={href:"https://dhinakg.github.io/apps.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},w=n('<h3 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h3><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the Supervise <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h3 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h3><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The Supervise application can now be opened from home screen.</p><h2 id="supervising-your-device" tabindex="-1"><a class="header-anchor" href="#supervising-your-device" aria-hidden="true">#</a> Supervising your device</h2><ol><li>Open the <code>Supervise</code> app from your home screen</li><li>Open the Settings app, then go to the <code>General</code> tab</li><li>Scroll down to the <code>Toggle Supervision</code> tab, then go to that tab</li><li>Enable the <code>Toggle Supervision</code> option</li><li>Restart your device</li></ol><p>After your device reboots, you should see a notice in Settings that you are supervised, if you don&#39;t, repeat the steps in this section.</p><h2 id="updating-your-firmware-version" tabindex="-1"><a class="header-anchor" href="#updating-your-firmware-version" aria-hidden="true">#</a> Updating your firmware version</h2>',10),k=e("li",null,"Open this page on your device",-1),S=e("li",null,[e("a",{href:"/assets/files/delay.mobileconfig"},"15.7.8")],-1),T=e("li",null,[e("a",{href:"/assets/files/delay.mobileconfig"},"16.6")],-1),I={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"Plug your device into power and connect to the Internet with Wi-Fi",-1),D=e("li",null,"Open the Settings application",-1),A=e("li",null,[t("Tap "),e("code",null,"General"),t(" -> "),e("code",null,"Software Update")],-1),q=e("li",null,"Ensure that the version displayed is the version you are intending to update to",-1),O=e("li",null,"Download and install the update",-1),E=e("li",null,"Once updated, remove the update profile through Settings",-1),N=n('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>As a result of supervising earlier, your device will remain supervised. Being in a supervised state means that:</p><ul><li>A message will display in Settings, showing that your device is supervised</li><li>Activation lock will be disabled, potentially making your device accessible by thieves (FindMy will still work however)</li><li>If your device has Mobile Device Management enabled (e.g. a school or work device), then your organisation will be able to silently install and uninstall apps on your device</li></ul><p>Note that, for most users, staying in a supervised state won&#39;t be an issue.</p><p>If you want to remove supervision, you&#39;ll need to reset your device and restore a previously made backup. This can be done by selecting &quot;Erase All Content and Settings&quot; in the Settings app, then restoring from a backup during setup from iCloud.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you restore a backup made in a jailbroken state from <strong>iTunes/Finder</strong>, you may encounter severe issues, such as bootloops.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you restore a backup made in a jailbroken state from <strong>iCloud</strong>, you may encounter false-positive flagging of jailbreak detection.</p></div>',3),P={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"TIP",-1),F={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"};function G(M,j){const o=s("ExternalLinkIcon"),a=s("router-link");return d(),c("div",null,[h,e("p",null,[t("Time is given in "),p,t(". For more expiration dates, view "),e("a",g,[t("dhinakg.github.io/delayed-otas.html"),i(o)]),t(".")]),e("div",v,[m,e("p",null,[t("You must be on iOS 15.7.1 and earlier, or iOS 16.0 to 16.1.2. If you are not on those versions, follow "),i(a,{to:"/updating-blobless-advanced"},{default:l(()=>[t("Updating (Blobless) (Advanced)")]),_:1}),t(" instead.")])]),f,e("ul",null,[e("li",null,[t("The latest version of "),e("a",y,[t("Supervise"),i(o)])]),e("li",null,[t("The latest version of "),e("a",_,[t("Sideloadly"),i(o)])]),e("li",null,[t("The latest version of "),e("a",b,[t("iTunes"),i(o)]),t(" if on Windows")])]),w,e("ol",null,[k,e("li",null,[t("Tap a version below to install its respective update profile: "),e("ul",null,[S,T,e("li",null,[t("For more firmware versions, view "),e("a",I,[t("dhinakg.github.io/delayed-otas.html"),i(o)]),t(".")])])]),x,D,A,q,O,E]),N,e("div",P,[C,e("p",null,[t("If the update was successful, continue to "),i(a,{to:"/get-started"},{default:l(()=>[t("Get Started")]),_:1}),t(" to jailbreak your device.")])]),e("p",null,[t("Credits to "),e("a",F,[t("dhinakg"),i(o)]),t(" for discovering this method.")])])}var R=r(u,[["render",G],["__file","index.html.vue"]]);export{R as default};
