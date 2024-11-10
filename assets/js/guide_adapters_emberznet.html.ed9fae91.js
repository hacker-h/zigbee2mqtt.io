"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[65167],{93294:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>d,data:()=>h});var r=t(24691);const n=t.p+"assets/img/skyconnect_isometric.24855e98.jpg",s=t.p+"assets/img/smlight-slzb-07.7ff5780d.jpg",i=t.p+"assets/img/tubezb-mgm24-poe.0b21d5ef.jpg",o=t.p+"assets/img/smlight-slzb-06mg24.a86095b2.jpg",l=t.p+"assets/img/yellow.b2cc4373.jpg",p={class:"hint-container details"},c={},d=(0,t(88242).A)(c,[["render",function(e,a){const t=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[a[13]||(a[13]=(0,r.Fv)('<h1 id="emberznet-adapters-silicon-labs" tabindex="-1"><a class="header-anchor" href="#emberznet-adapters-silicon-labs"><span>EmberZNet adapters (Silicon Labs)</span></a></h1><p>Currently supported firmware version: 7.4.x, 8.0.x</p><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>Use of 8.0.0 and 8.0.1 is not recommended due to firmware issues that have been resolved in 8.0.2.</p></div><p>Firmware release notes: <a href="https://www.silabs.com/developers/zigbee-emberznet?tab=documentation" target="_blank" rel="noopener noreferrer">https://www.silabs.com/developers/zigbee-emberznet?tab=documentation</a></p><p><em>Multiprotocol is not currently supported due to the various issues associated with it. The recommended alternative to establish multiple networks is to use one adapter per protocol.</em></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> ember</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',7)),(0,r.Lk)("p",null,[a[1]||(a[1]=(0,r.eW)("Other supported settings are: ")),a[2]||(a[2]=(0,r.Lk)("code",null,"adapter_concurrent",-1)),a[3]||(a[3]=(0,r.eW)(" and ")),a[4]||(a[4]=(0,r.Lk)("code",null,"transmit_power",-1)),a[5]||(a[5]=(0,r.eW)(" (")),(0,r.bF)(t,{to:"/guide/configuration/adapter-settings.html"},{default:(0,r.k6)((()=>a[0]||(a[0]=[(0,r.eW)("docs")]))),_:1}),a[6]||(a[6]=(0,r.eW)(")."))]),a[14]||(a[14]=(0,r.Fv)('<div class="hint-container tip"><p class="hint-container-title">TIP</p><p>If you are experiencing issues with your adapter and it has hardware flow control support (check list below), try to flash a <a href="https://github.com/darkxst/silabs-firmware-builder/tree/ember-nohw/firmware_builds/" target="_blank" rel="noopener noreferrer">firmware with hardware flow control disabled</a> and use the following setting instead:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>The use of <code>adapter: ezsp</code> is now deprecated. See <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/21462" target="_blank" rel="noopener noreferrer">https://github.com/Koenkk/zigbee2mqtt/discussions/21462</a></p></div><h3 id="firmware-flashing" tabindex="-1"><a class="header-anchor" href="#firmware-flashing"><span>Firmware flashing</span></a></h3><ul><li>Firmware repositories: <ul><li>Multi-devices by <a href="https://github.com/darkxst/" target="_blank" rel="noopener noreferrer">@darkxst</a>: <a href="https://github.com/darkxst/silabs-firmware-builder/" target="_blank" rel="noopener noreferrer">https://github.com/darkxst/silabs-firmware-builder/</a></li><li><a href="https://github.com/NabuCasa" target="_blank" rel="noopener noreferrer">@NabuCasa</a> / Home Assistant devices: <a href="https://github.com/NabuCasa/silabs-firmware-builder/releases" target="_blank" rel="noopener noreferrer">https://github.com/NabuCasa/silabs-firmware-builder/releases</a></li><li><a href="https://github.com/tube0013" target="_blank" rel="noopener noreferrer">@TubesZB</a> devices: <a href="https://github.com/tube0013/tube_gateways/" target="_blank" rel="noopener noreferrer">https://github.com/tube0013/tube_gateways/</a></li><li><em><strong>Experimental</strong></em> multi-devices by <a href="https://github.com/Nerivec/" target="_blank" rel="noopener noreferrer">@Nerivec</a>: <a href="https://github.com/Nerivec/silabs-firmware-builder/releases" target="_blank" rel="noopener noreferrer">https://github.com/Nerivec/silabs-firmware-builder/releases</a></li></ul></li><li>Web-based <ul><li>Multi-devices by <a href="https://github.com/darkxst/" target="_blank" rel="noopener noreferrer">@darkxst</a>: <a href="https://darkxst.github.io/silabs-firmware-builder/" target="_blank" rel="noopener noreferrer">Silabs Firmware Flasher</a></li><li>For SkyConnect by <a href="https://github.com/NabuCasa" target="_blank" rel="noopener noreferrer">@NabuCasa</a>: <a href="https://skyconnect.home-assistant.io/firmware-update/" target="_blank" rel="noopener noreferrer">SkyConnect Flasher</a></li><li>SMLight: <a href="https://smlight.tech/flasher/" target="_blank" rel="noopener noreferrer">Flasher</a></li></ul></li><li>Command-line based: <ul><li>Multi-devices by <a href="https://github.com/NabuCasa" target="_blank" rel="noopener noreferrer">@NabuCasa</a>: <a href="https://github.com/NabuCasa/universal-silabs-flasher" target="_blank" rel="noopener noreferrer">Universal Silicon Labs Flasher</a> (also available via <a href="https://github.com/home-assistant/addons/tree/master/silabs_flasher" target="_blank" rel="noopener noreferrer">Home Assistant add-on</a>)</li><li>Multi-devices by <a href="https://github.com/Nerivec/" target="_blank" rel="noopener noreferrer">@Nerivec</a>: <a href="https://github.com/Nerivec/ember-zli" target="_blank" rel="noopener noreferrer">Ember ZLI</a></li></ul></li><li>Other: <ul><li>Standalone J-Link Flash Tool (also included in <a href="https://www.silabs.com/developers/simplicity-studio" target="_blank" rel="noopener noreferrer">Simplicity Studio</a>): <a href="https://www.silabs.com/developers/simplicity-studio/simplicity-commander" target="_blank" rel="noopener noreferrer">Simplicity Commander</a></li></ul></li><li>Some Ethernet adapters support flashing Zigbee firmware over their own web-interface. In this case you do not need any external software and hardware. Just go to the webinterface and press &quot;Update Zigbee firmware&quot;. Please refer to the manual of your particular Zigbee adapter for this functionality.</li></ul><h2 id="recommended" tabindex="-1"><a class="header-anchor" href="#recommended"><span>Recommended</span></a></h2><h3 id="usb" tabindex="-1"><a class="header-anchor" href="#usb"><span>USB</span></a></h3>',6)),(0,r.Lk)("details",p,[a[10]||(a[10]=(0,r.Lk)("summary",null,"Sonoff ZBDongle-E (V2 model, EFR32MG21)",-1)),a[11]||(a[11]=(0,r.Lk)("p",null,[(0,r.eW)("With external antenna. Only supports software flow control (make sure not to set "),(0,r.Lk)("code",null,"rtscts: true"),(0,r.eW)(").")],-1)),(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,[a[8]||(a[8]=(0,r.eW)('This section is about the "ZBDongle-E", for "ZBDongle-P" see ')),(0,r.bF)(t,{to:"/guide/adapters/zstack.html"},{default:(0,r.k6)((()=>a[7]||(a[7]=[(0,r.eW)("zStack")]))),_:1}),a[9]||(a[9]=(0,r.eW)("."))])]),a[12]||(a[12]=(0,r.Fv)('<ul><li><a href="https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-e/" target="_blank" rel="noopener noreferrer">Product Page</a></li><li><a href="https://sonoff.tech/product-review/how-to-use-sonoff-dongle-plus-on-home-assistant-how-to-flash-firmware/" target="_blank" rel="noopener noreferrer">Coordinator firmware</a></li><li><a href="https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf" target="_blank" rel="noopener noreferrer">Flashing</a></li><li><a href="https://itead.cc/product/zigbee-3-0-usb-dongle/" target="_blank" rel="noopener noreferrer">Buy</a></li></ul><img src="data:image/jpeg;base64,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" width="200">',2))]),a[15]||(a[15]=(0,r.Fv)('<details class="hint-container details"><summary>Nabu Casa Home Assistant SkyConnect (EFR32MG21)</summary><p>With integrated antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://www.home-assistant.io/skyconnect" target="_blank" rel="noopener noreferrer">Product page</a></li><li><a href="https://github.com/NabuCasa/silabs-firmware" target="_blank" rel="noopener noreferrer">Coordinator firmware</a></li><li><a href="https://skyconnect.home-assistant.io/" target="_blank" rel="noopener noreferrer">Flashing</a></li><li><a href="https://www.home-assistant.io/skyconnect" target="_blank" rel="noopener noreferrer">Buy</a></li></ul><img src="'+n+'" width="200"></details><details class="hint-container details"><summary>SMLIGHT SLZB-07 (EFR32MG21)</summary><p>With external antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://smlight.tech/product/slzb-07/" target="_blank" rel="noopener noreferrer">Product page</a></li><li>Buy: <a href="https://smartlight.me/smart-home-devices/zigbee-devices/slzb-07-zigbee-usb-adapter-en" target="_blank" rel="noopener noreferrer">Official Store - Worldwide</a>, <a href="https://www.aliexpress.com/item/1005006273914143.html" target="_blank" rel="noopener noreferrer">Aliexpress - Worldwide</a>.<br> Local fast delivery: <a href="https://shop.dialedin.com.au/products/smlight-slzb-07-usb-zigbee-adapter" target="_blank" rel="noopener noreferrer">Australia</a>, <a href="https://www.hobbyelectronica.nl/product/slzb-07-zigbee-coordinator-usb/" target="_blank" rel="noopener noreferrer">Austria, Belgium, Germany, Netherlands</a>, <a href="https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html" target="_blank" rel="noopener noreferrer">France</a>, <a href="https://pcblab.io/szukaj?controller=search&amp;s=slzb" target="_blank" rel="noopener noreferrer">Poland</a>, <a href="https://www.amazon.com/LOAMLIN-SMLIGHT-SLZB-07-Zigbee-Coordinator/dp/B0CNVBCCR3" target="_blank" rel="noopener noreferrer">US Amazon</a></li></ul><img src="'+s+'" width="200"></details><h3 id="network-tcp" tabindex="-1"><a class="header-anchor" href="#network-tcp"><span>Network (TCP)</span></a></h3><details class="hint-container details"><summary>TubeZB EFR32 MGM24 POE (MGM240PB32VNN)</summary><p>With external antenna.</p><ul><li><a href="https://tubeszb.com/product/efr32-mgm24-poe-coordinator/" target="_blank" rel="noopener noreferrer">Product page</a></li><li><a href="https://tubeszb.com/product/efr32-mgm24-poe-coordinator/" target="_blank" rel="noopener noreferrer">Buy</a></li></ul><img src="'+i+'" width="200"></details><h3 id="hybrid-usb-network" tabindex="-1"><a class="header-anchor" href="#hybrid-usb-network"><span>Hybrid (USB + Network)</span></a></h3><details class="hint-container details"><summary>SMLIGHT SLZB-06M (EFR32MG21)</summary><p>With external antenna.</p><p><strong>For optimal performance, ensure your firmware is at least version 20240510 (requires Core firmware version 2.2.0 or higher). Not suitable for WiFi or other high latency connections.</strong></p><ul><li><a href="https://smlight.tech/product/slzb-06m/" target="_blank" rel="noopener noreferrer">Product page</a></li><li>Buy: <a href="https://smartlight.me/smart-home-devices/zigbee-devices/slzb-06m-zigbee-adapter" target="_blank" rel="noopener noreferrer">Official Store - Worldwide</a>, <a href="https://www.aliexpress.com/item/1005004942648430.html" target="_blank" rel="noopener noreferrer">Aliexpress - Worldwide</a>, <a href="https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/" target="_blank" rel="noopener noreferrer">Tindie - Worldwide</a>.<br> Local fast delivery: <a href="https://shop.dialedin.com.au/products/smlight-slzb-06m-efr32mg21-lan-zigbee-adapter" target="_blank" rel="noopener noreferrer">AU</a>, <a href="https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/" target="_blank" rel="noopener noreferrer">AT</a>, <a href="https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/" target="_blank" rel="noopener noreferrer">BE</a>, <a href="https://shop.swiss-domotique.ch/en/gateways-antennas/2390-smlight-slzb-06m-adaptateur-zigbee-ethernet-poe-usb-wifi.html" target="_blank" rel="noopener noreferrer">CH</a>, <a href="https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/" target="_blank" rel="noopener noreferrer">EE</a>, <a href="https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html" target="_blank" rel="noopener noreferrer">FR</a>, <a href="https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/" target="_blank" rel="noopener noreferrer">DE</a>, <a href="https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/" target="_blank" rel="noopener noreferrer">LT</a>, <a href="https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/" target="_blank" rel="noopener noreferrer">LV</a>, <a href="https://pcblab.io/slzb-06m-adapter-zigbee-efr32mg21-ethernet-poe-usb-lan-wifi.html" target="_blank" rel="noopener noreferrer">PL</a>, <a href="https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644" target="_blank" rel="noopener noreferrer">TH</a>, <a href="https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/" target="_blank" rel="noopener noreferrer">US official</a>, <a href="https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3" target="_blank" rel="noopener noreferrer">US Amazon</a>.</li></ul><img src="https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06m-main-title.jpg" width="200"></details><details class="hint-container details"><summary>SMLIGHT SLZB-06mg24 (EFR32MG24)</summary><p>With external antenna.</p><ul><li><a href="https://smlight.tech/product/slzb-06mg24/" target="_blank" rel="noopener noreferrer">Product page</a></li><li>[Recommended firmware] UPCOMING</li><li>[Buy] UPCOMING</li></ul><img src="'+o+'" width="200"></details><h3 id="hub" tabindex="-1"><a class="header-anchor" href="#hub"><span>Hub</span></a></h3><details class="hint-container details"><summary>Nabu Casa Home Assistant Yellow (MGM210P)</summary><p>With integrated antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://www.home-assistant.io/yellow" target="_blank" rel="noopener noreferrer">Product page</a></li><li><a href="https://github.com/NabuCasa/silabs-firmware" target="_blank" rel="noopener noreferrer">Coordinator firmware</a></li><li><a href="https://skyconnect.home-assistant.io/" target="_blank" rel="noopener noreferrer">Flashing</a></li><li><a href="https://www.home-assistant.io/yellow" target="_blank" rel="noopener noreferrer">Buy</a></li></ul><img src="'+l+'" width="200"></details><h3 id="custom" tabindex="-1"><a class="header-anchor" href="#custom"><span>Custom</span></a></h3><h2 id="not-recommended" tabindex="-1"><a class="header-anchor" href="#not-recommended"><span>Not recommended</span></a></h2><details class="hint-container details"><summary>All Series 0/1 based-devices</summary><p>Older hardware.</p><p>See <a href="https://www.silabs.com/documents/public/release-notes/emberznet-release-notes-7.4.3.0.pdf" target="_blank" rel="noopener noreferrer">Silicon Labs announcement</a>.</p></details><details class="hint-container details"><summary>Easyiot ZB-GW04 (v1.1, v1.2)</summary><p>Low-resources hardware.</p></details><h2 id="logging-specific-to-this-stack" tabindex="-1"><a class="header-anchor" href="#logging-specific-to-this-stack"><span>Logging specific to this stack</span></a></h2><h3 id="info-level" tabindex="-1"><a class="header-anchor" href="#info-level"><span><code>info</code> level</span></a></h3><p>The start and stop sequences describe the steps taken to get Zigbee2MQTT running with <code>ember</code> in more details. This should help to locate potential start and stop problems.</p><p>Stack/Network status changes (up/down, channel change, open/close from Permit Join, etc).</p><p><em>Network/Route error</em>: The error indicates that there was a problem sending/receiving messages from the target node (see below for more details). A few of these over time is expected (or on Zigbee2MQTT start), too many, too often, is indicative of a problem in your network.</p><h3 id="warning-level" tabindex="-1"><a class="header-anchor" href="#warning-level"><span><code>warning</code> level</span></a></h3><p><em>Node descriptor reports device is only compliant to revision</em>: Device identified as having an older Zigbee revision. These can be the source of problems, especially if <code>pre-21</code>.</p><p><em>[EzspConfigId] Failed to SET</em>: Usually when the coordinator has lower memory than others. In-firmware value will be used instead.</p><p><em>An ID conflict was detected</em>: Two devices cannot have the same ID on the same network. The involved devices are kicked off the network then should rejoin (may need to re-pair them if not).</p><p><em>NOT READY - Signaling NCP</em>: <code>ember</code> driver is temporarily overloaded. The coordinator is made aware and processing is deferred for a short period.</p><h3 id="error-level" tabindex="-1"><a class="header-anchor" href="#error-level"><span><code>error</code> level</span></a></h3><p><em>NCP EZSP protocol version of XX does not match Host version 13</em>: <code>ember</code> currently requires a firmware with EZSP v13 (EmberZNet firmware 7.4.x). You will need to upgrade your adapter&#39;s firmware. <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/21462" target="_blank" rel="noopener noreferrer">Check the first two posts here</a>.</p><p><em>[BACKUP] Current backup file is from an unsupported EZSP version</em>: <code>ember</code> currently only supports EZSP v12 and above backups (can be identified by opening the <code>coordinator_backup.json</code> file). The file has been renamed automatically. A new one will be created by <code>ember</code> upon successful start.</p><p>Failed delivery of a message. The target device could not be reached. There can be several causes for this, the rest of the logs should help identify which.</p><p>Failed request. Message should be self-explanatory, and give a <code>status</code> indicating the reason of the failure.</p><p>NCP Fatal Error. The coordinator failed (the reason should be given in the message). Zigbee2MQTT will attempt to reset it and resume communication. If unsuccessful, Zigbee2MQTT will be stopped completely and the system&#39;s watchdog (if any) will attempt to restart it.</p><h2 id="tools" tabindex="-1"><a class="header-anchor" href="#tools"><span>Tools</span></a></h2><h3 id="ember-zli" tabindex="-1"><a class="header-anchor" href="#ember-zli"><span>Ember ZLI</span></a></h3><p><a href="https://github.com/Nerivec/ember-zli/" target="_blank" rel="noopener noreferrer">https://github.com/Nerivec/ember-zli/</a></p><p>NodeJS command line tool that allows firmware flashing, interacting with the adapter&#39;s stack, sniffing, etc. using <a href="https://github.com/Koenkk/zigbee-herdsman/" target="_blank" rel="noopener noreferrer">zigbee-herdsman</a>. Check out the <a href="https://github.com/Nerivec/ember-zli/wiki" target="_blank" rel="noopener noreferrer">Wiki</a> for more details.</p><h3 id="bellows-cli" tabindex="-1"><a class="header-anchor" href="#bellows-cli"><span>Bellows CLI</span></a></h3><p><a href="https://github.com/zigpy/bellows" target="_blank" rel="noopener noreferrer">https://github.com/zigpy/bellows</a></p><p>Python command line tool that allows interacting with the adapter&#39;s stack.</p><h3 id="zigbee2mqtt-ember-helper" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt-ember-helper"><span>Zigbee2MQTT Ember Helper</span></a></h3><p><a href="https://nerivec.github.io/z2m-ember-helper/" target="_blank" rel="noopener noreferrer">https://nerivec.github.io/z2m-ember-helper/</a></p><p>Analyze log files in your browser and get an automated review of your network.</p><h2 id="expert-customizing-stack-configuration" tabindex="-1"><a class="header-anchor" href="#expert-customizing-stack-configuration"><span>[EXPERT] Customizing stack configuration</span></a></h2><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>This feature modifies the behavior of your adapter, and the network. Using improper values for your network can completely break it. Only modify any of these values if you are absolutely sure your network will benefit from it. Most networks will be just fine with the defaults.</p></div><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>Do not open a new issue in Zigbee2MQTT before confirming the problem is present with the default configuration.</p></div><p>You can modify the EmberZNet default stack configuration by creating a file <code>stack_config.json</code> in the same folder as your <code>coordinator_backup.json</code>. This configuration can only be done manually.</p><p>Format, available and default values are as below:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;CONCENTRATOR_RAM_TYPE&quot;</span><span class="token operator">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;CONCENTRATOR_MIN_TIME&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;CONCENTRATOR_MAX_TIME&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;CONCENTRATOR_ROUTE_ERROR_THRESHOLD&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;CONCENTRATOR_DELIVERY_FAILURE_THRESHOLD&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;CONCENTRATOR_MAX_HOPS&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;MAX_END_DEVICE_CHILDREN&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;TRANSIENT_DEVICE_TIMEOUT&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;END_DEVICE_POLL_TIMEOUT&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;TRANSIENT_KEY_TIMEOUT_S&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;CCA_MODE&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Any value that is omitted from the JSON file, invalid or out of range, will use the default instead.</p><p>Documentation on these values and their behavior can be found in <a href="https://www.silabs.com/documents/public/user-guides/ug100-ezsp-reference-guide.pdf" target="_blank" rel="noopener noreferrer">SiLabs UG100 - 2.3.1 PDF</a> and <a href="https://community.silabs.com/s/article/how-does-the-concentrator-plugin-work-x?language=en_US" target="_blank" rel="noopener noreferrer">concentrator article</a>.</p><p>The driver further restricts values to the below:</p><ul><li>CONCENTRATOR_RAM_TYPE: &quot;high&quot; or &quot;low&quot;</li><li>CONCENTRATOR_MIN_TIME: min 1, max 60</li><li>CONCENTRATOR_MAX_TIME: min 30, max 300</li><li>CONCENTRATOR_ROUTE_ERROR_THRESHOLD: min 1, max 100</li><li>CONCENTRATOR_DELIVERY_FAILURE_THRESHOLD: min 1, max 100</li><li>CONCENTRATOR_MAX_HOPS: min 0, max 30</li><li>MAX_END_DEVICE_CHILDREN: min 6, max 64</li><li>TRANSIENT_DEVICE_TIMEOUT: min 0, max 65535</li><li>END_DEVICE_POLL_TIMEOUT: min 0, max 14</li><li>TRANSIENT_KEY_TIMEOUT_S: min 0, max 65535</li><li>CCA_MODE: defaults to undefined (i.e. left to firmware default), possible values: <ul><li>&quot;RSSI&quot;: RSSI-based CCA. CCA reports a busy medium upon detecting any energy above -75 (default).</li><li>&quot;SIGNAL&quot;: Signal Identifier-based CCA. CCA reports a busy medium only upon the detection of a signal compliant with this standard with the same modulation and spreading characteristics of the PHY that is currently in use.</li><li>&quot;SIGNAL_OR_RSSI&quot;: RSSI or signal identifier-based CCA. CCA reports a busy medium on either detecting any energy above -75 (default) or detection of a signal compliant with this standard with the same modulation and spreading characteristics of the PHY that is currently in use.</li><li>&quot;SIGNAL_AND_RSSI&quot;: RSSI and signal identifier-based CCA. CCA reports a busy medium only on detecting any energy above -75 (default) of a signal compliant with this standard with the same modulation and spreading characteristics of the PHY that is currently in use.</li><li>&quot;ALWAYS_TRANSMIT&quot;: ALOHA. Always transmit CCA=1. CCA always reports an idle medium.</li></ul></li></ul><p><strong>Note that some values are not only restricted by these ranges, but also by the memory available in your adapter. If any value (or combination) is too great for your adapter to handle, it will default to the firmware value(s) instead.</strong></p>',50))])}]]),h=JSON.parse('{"path":"/guide/adapters/emberznet.html","title":"EmberZNet adapters (Silicon Labs)","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Firmware flashing","slug":"firmware-flashing","link":"#firmware-flashing","children":[]},{"level":2,"title":"Recommended","slug":"recommended","link":"#recommended","children":[{"level":3,"title":"USB","slug":"usb","link":"#usb","children":[]},{"level":3,"title":"Network (TCP)","slug":"network-tcp","link":"#network-tcp","children":[]},{"level":3,"title":"Hybrid (USB + Network)","slug":"hybrid-usb-network","link":"#hybrid-usb-network","children":[]},{"level":3,"title":"Hub","slug":"hub","link":"#hub","children":[]},{"level":3,"title":"Custom","slug":"custom","link":"#custom","children":[]}]},{"level":2,"title":"Not recommended","slug":"not-recommended","link":"#not-recommended","children":[]},{"level":2,"title":"Logging specific to this stack","slug":"logging-specific-to-this-stack","link":"#logging-specific-to-this-stack","children":[{"level":3,"title":"info level","slug":"info-level","link":"#info-level","children":[]},{"level":3,"title":"warning level","slug":"warning-level","link":"#warning-level","children":[]},{"level":3,"title":"error level","slug":"error-level","link":"#error-level","children":[]}]},{"level":2,"title":"Tools","slug":"tools","link":"#tools","children":[{"level":3,"title":"Ember ZLI","slug":"ember-zli","link":"#ember-zli","children":[]},{"level":3,"title":"Bellows CLI","slug":"bellows-cli","link":"#bellows-cli","children":[]},{"level":3,"title":"Zigbee2MQTT Ember Helper","slug":"zigbee2mqtt-ember-helper","link":"#zigbee2mqtt-ember-helper","children":[]}]},{"level":2,"title":"[EXPERT] Customizing stack configuration","slug":"expert-customizing-stack-configuration","link":"#expert-customizing-stack-configuration","children":[]}],"git":{"updatedTime":1731248548000},"filePathRelative":"guide/adapters/emberznet.md"}')}}]);