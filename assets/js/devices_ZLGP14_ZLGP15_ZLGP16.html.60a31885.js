"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40821],{71829:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>i,data:()=>l});var n=t(24691);const r={},i=(0,t(88242).A)(r,[["render",function(e,a){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a[10]||(a[10]=(0,n.Lk)("h1",{id:"legrand-zlgp14-zlgp15-zlgp16",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#legrand-zlgp14-zlgp15-zlgp16"},[(0,n.Lk)("span",null,"Legrand ZLGP14/ZLGP15/ZLGP16")])],-1)),(0,n.Lk)("table",null,[a[6]||(a[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[a[2]||(a[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZLGP14/ZLGP15/ZLGP16")],-1)),(0,n.Lk)("tr",null,[a[1]||(a[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Legrand"},{default:(0,n.k6)((()=>a[0]||(a[0]=[(0,n.eW)("Legrand")]))),_:1})])]),a[3]||(a[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Wireless and batteryless scenario switch (home arrival/departure, 1-4 switches, daytime day/night)")],-1)),a[4]||(a[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"action, linkquality")],-1)),a[5]||(a[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZLGP14-ZLGP15-ZLGP16.png",alt:"Legrand ZLGP14/ZLGP15/ZLGP16"})])],-1))])]),a[11]||(a[11]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient.<br> The device identification is the same for several models ZLGP14, ZLGP15 and ZLGP16 (so far). Only command IDs differ (from 16 to 23).<br> Current supported models are:</p><ul><li>ZLGP14 (home arrival/home departure)</li><li>ZLGP15 (1 to 4 numbered switches)</li><li>ZLGP16 (daytime day/daytime night)</li></ul><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To pair this device, hold the configuration button (on the back of the device) and press any of the buttons.<br> For further details, please refer to manufacturer documentation below.</p><h3 id="manfacturer-documentations" tabindex="-1"><a class="header-anchor" href="#manfacturer-documentations"><span>Manfacturer documentations</span></a></h3><ul><li>ZLGP14 <a href="https://www.admin.legrandoc.com/files/documents/S000113314EN-00.pdf" target="_blank" rel="noopener noreferrer">EN</a> <a href="https://www.admin.legrandoc.com/files/documents/S000113314FR-00.pdf" target="_blank" rel="noopener noreferrer">FR</a></li><li>ZLGP15 <a href="https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf" target="_blank" rel="noopener noreferrer">EN</a> <a href="https://www.admin.legrandoc.com/files/documents/S000113321FR-00.pdf" target="_blank" rel="noopener noreferrer">FR</a></li><li>ZLGP16 <a href="https://www.admin.legrandoc.com/files/documents/S000113317EN-00.pdf" target="_blank" rel="noopener noreferrer">EN</a> <a href="https://www.admin.legrandoc.com/files/documents/S000113317FR-00.pdf" target="_blank" rel="noopener noreferrer">FR</a></li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',9)),(0,n.Lk)("p",null,[a[8]||(a[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>a[7]||(a[7]=[(0,n.eW)("OTA updates")]))),_:1}),a[9]||(a[9]=(0,n.eW)("."))]),a[12]||(a[12]=(0,n.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>home_arrival</code>, <code>home_departure</code>, <code>press_1</code>, <code>press_2</code>, <code>press_3</code>, <code>press_4</code>, <code>daytime_day</code>, <code>daytime_night</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5))])}]]),l=JSON.parse('{"path":"/devices/ZLGP14_ZLGP15_ZLGP16.html","title":"Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT","description":"Integrate your Legrand ZLGP14/ZLGP15/ZLGP16 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:09:29.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Manfacturer documentations","slug":"manfacturer-documentations","link":"#manfacturer-documentations","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731248548000},"filePathRelative":"devices/ZLGP14_ZLGP15_ZLGP16.md"}')}}]);