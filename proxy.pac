/*** F5 VIP Health Monitor. DO NOT REMOVE ***/
/*** Modified: 2022/03/03 18:03:41 UTC+10:00 ***/
function FindProxyForURL(url, host) {
      var url = url.toLowerCase();
      var host = host.toLowerCase();
      var DIRECT = "DIRECT";
      var PROXY = "PROXY proxy2.eq.edu.au:80";
      var MCC_PROXY = null;
      var DTN = false;

      /*** NAPLAN toggle ***/
      var NAPLAN_DIRECT = false;

    /*** Ensure Unified Agent location check goes via proxy  ***/
      if (shExpMatch(url, "*/bluagent/0/get/http/bluecoat.com/*")) { return PROXY; }

    /*** Route .local domain traffic directly ***/
      if (shExpMatch(host, "*.local")) { return DIRECT; }
      if (shExpMatch(host, "*.local.")) { return DIRECT; }

    /*** Route plain hostnames directly ***/
      if (isPlainHostName(host)) { return DIRECT; }

      var HOSTIP = dnsResolve(host);

    /*** No DNS direct ***/
      if (!HOSTIP) { return DIRECT; }

      /*** Direct Networks ***/
      if (isInNet(HOSTIP, "10.0.0.0", "255.0.0.0")) {return DIRECT;}
      if (isInNet(HOSTIP, "100.64.0.0", "255.192.0.0")) {return DIRECT;}
      if (isInNet(HOSTIP, "127.0.0.0", "255.0.0.0")) {return DIRECT;}
      if (isInNet(HOSTIP, "131.242.133.0", "255.255.255.224")) {return DIRECT;}
      if (isInNet(HOSTIP, "131.242.41.192", "255.255.255.224")) {return DIRECT;}
      if (isInNet(HOSTIP, "131.242.41.96", "255.255.255.224")) {return DIRECT;}
      if (isInNet(HOSTIP, "147.132.0.0", "255.255.0.0")) {return DIRECT;}
      if (isInNet(HOSTIP, "161.143.0.0", "255.255.0.0")) {return DIRECT;}
      if (isInNet(HOSTIP, "172.16.0.0", "255.240.0.0")) {return DIRECT;}
      if (isInNet(HOSTIP, "192.168.0.0", "255.255.0.0")) {return DIRECT;}

      /*** MCC Proxy ***/
      if ( MCC_PROXY && shExpMatch(url, "http://*") ) {
            if (shExpMatch(host, "assets.xbox.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.assets.xbox.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "assets1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.assets1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "assets2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.assets2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "b.c2r.ts.cdn.office.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.b.c2r.ts.cdn.office.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "d1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.d1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "d2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.d2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "dl.delivery.mp.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.dl.delivery.mp.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "dlassets.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.dlassets.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "dlassets2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.dlassets2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "download.windowsupdate.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.download.windowsupdate.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "emdl.ws.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.emdl.ws.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "f.c2r.ts.cdn.office.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.f.c2r.ts.cdn.office.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "officecdn.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.officecdn.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "officecdn.microsoft.com.edgesuite.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.officecdn.microsoft.com.edgesuite.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "statics.teams.cdn.office.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.statics.teams.cdn.office.net")) {return MCC_PROXY;}
            if (shExpMatch(host, "swda01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swda01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swda01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swda01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swda02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swda02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swda02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swda02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdb01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdb01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdb01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdb01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdb02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdb02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdb02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdb02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdc01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdc01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdc01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdc01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdc02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdc02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdc02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdc02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdd01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdd01.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdd01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdd01-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdd02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdd02.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "swdd02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.swdd02-mscdn.manage.microsoft.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "xvcb1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.xvcb1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "xvcb2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.xvcb2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "xvcf1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.xvcf1.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "xvcf2.xboxlive.com")) {return MCC_PROXY;}
            if (shExpMatch(host, "*.xvcf2.xboxlive.com")) {return MCC_PROXY;}
      }

      /*** Proxy Hosts ***/
      if (shExpMatch(host, "mytechnology.eq.edu.au")) {return PROXY;}
      if (shExpMatch(host, "peerreviewer.eq.edu.au")) {return PROXY;}
      if (shExpMatch(host, "sbs-train.eq.edu.au")) {return PROXY;}
      if (shExpMatch(host, "whoami.eq.edu.au")) {return PROXY;}
      if (shExpMatch(host, "miiswebconfig.qed.qld.gov.au")) {return PROXY;}
      if (shExpMatch(host, "phonedirectory.qed.qld.gov.au")) {return PROXY;}
      if (shExpMatch(host, "webmail2.tafe.qld.gov.au")) {return PROXY;}

      /*** DTN direct ***/
      if (DTN) {return DIRECT;}

      /*** Non-DTN Proxy Hosts ***/
      if (shExpMatch(host, "community.office365.com")) {return PROXY;}
      if (shExpMatch(host, "*.res.office365.com")) {return PROXY;}
      if (shExpMatch(host, "support.zoom.us")) {return PROXY;}

      /*** NAPLAN traffic ***/
      if (NAPLAN_DIRECT) {
            if (shExpMatch(host, "www.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "publish.viostream.com")) {return DIRECT;}
            if (shExpMatch(host, "adsauthprod-fvcxbrchcvc4g9d2.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adsnatuat-add7b3ayckbcf8gc.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adsptprod-exgmf9d8ebhcazcv.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adstrialsprod-hjhcdxhhduf3c9a9.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adslaunchpadprod-cge5c9gedxf9bdbj.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "pages.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "adsbprod-anakezhcbvbbdhee.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adsdr-gxhhb3d2draybph7.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adsaprod-a9bwfdbzguemb4h4.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "adsuat-c7emdpbmbvc6esav.a01.azurefd.net")) {return DIRECT;}
            if (shExpMatch(host, "dr.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "uat.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "authoring.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "training.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "publicdemo.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "trials.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "proda.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "prodb.ads.cdn.janisoncloud.com")) {return DIRECT;}
            if (shExpMatch(host, "student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "administration.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "global-beta.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "global.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "test-service-api-alpha.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "test-service-global-alpha.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "test-service-api.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "test-service-global.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "syd0204adsaprodts.blob.core.windows.net")) {return DIRECT;}
            if (shExpMatch(host, "syd0204adsprodarena.blob.core.windows.net")) {return DIRECT;}
            if (shExpMatch(host, "mel0204adsdrts.blob.core.windows.net")) {return DIRECT;}
            if (shExpMatch(host, "nap.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "demo.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "training-student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "training-admin.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "nuat-global.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "test-service-api-training.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "test-service-global-training.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "mel0204adsnatuatarena.blob.core.windows.net")) {return DIRECT;}
            if (shExpMatch(host, "trials-student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "trials-admin.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "trials-global.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "napsl-student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "napsl-admin.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "napcc-admin.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "napcc-student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "prt-student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "prt-admin.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "srt-student.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "srt-admin.assessform.edu.au")) {return DIRECT;}
            if (shExpMatch(host, "mel0204adse2eprodarena.blob.core.windows.net")) {return DIRECT;}
      }

      /*** Direct Hosts ***/
      if (shExpMatch(host, "sales.pohlmans.com.au")) {return DIRECT;}
      if (shExpMatch(host, "telstra-crl.pki.telstra.com.au")) {return DIRECT;}
      if (shExpMatch(host, "telstra-ocsp.pki.telstra.com.au")) {return DIRECT;}
      if (shExpMatch(host, "zoom.aarnet.edu.au")) {return DIRECT;}
      if (shExpMatch(host, "*.zoom.aarnet.edu.au")) {return DIRECT;}
      if (shExpMatch(host, "mel0204adsdrts.azureedge.net")) {return DIRECT;}
      if (shExpMatch(host, "z3950.scis.curriculum.edu.au")) {return DIRECT;}
      if (shExpMatch(host, "bbb.formulastudent.edu.au")) {return DIRECT;}
      if (shExpMatch(host, "telehealth.health.qld.gov.au")) {return DIRECT;}
      if (shExpMatch(host, "scram.police.qld.gov.au")) {return DIRECT;}
      if (shExpMatch(host, "scram-secure.police.qld.gov.au")) {return DIRECT;}
      if (shExpMatch(host, "police.qld.gov.au")) {return DIRECT;}
      if (shExpMatch(host, "www.police.qld.gov.au")) {return DIRECT;}
      if (shExpMatch(host, "mypolice.qld.gov.au")) {return DIRECT;}
      if (shExpMatch(host, "vcct.healthdirect.org.au")) {return DIRECT;}
      if (shExpMatch(host, "ultra-au-prod-turn-nlb.bbcollab.cloud")) {return DIRECT;}
      if (shExpMatch(host, "ultra-au-prod-turn-tcp.bbcollab.cloud")) {return DIRECT;}
      if (shExpMatch(host, "esupport.acer-apac.com")) {return DIRECT;}
      if (shExpMatch(host, "appldnld.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "guzzoni.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "*apps.itunes.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "lcdn-locator.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "*.push.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "serverstatus.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "swcdn.apple.com")) {return DIRECT;}
      if (shExpMatch(host, "updates.cdn-apple.com")) {return DIRECT;}
      if (shExpMatch(host, "updates-http.cdn-apple.com")) {return DIRECT;}
      if (shExpMatch(host, "*.portal.cloudappsecurity.com")) {return DIRECT;}
      if (shExpMatch(host, "sas.elluminate.com")) {return DIRECT;}
      if (shExpMatch(host, "office.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*broadcast.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*excel.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*onenote.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*powerpoint.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*rtc.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*shared.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*view.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*visio.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*word-edit.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*word-view.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "nexus.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "nexusrules.officeapps.live.com")) {return DIRECT;}
      if (shExpMatch(host, "*.lync.com")) {return DIRECT;}
      if (shExpMatch(host, "*.medu.com")) {return DIRECT;}
      if (shExpMatch(host, "admin.microsoft.com")) {return DIRECT;}
      if (shExpMatch(host, "graph.microsoft.com")) {return DIRECT;}
      if (shExpMatch(host, "login.microsoft.com")) {return DIRECT;}
      if (shExpMatch(host, "officestore.microsoft.com")) {return DIRECT;}
      if (shExpMatch(host, "teams.microsoft.com")) {return DIRECT;}
      if (shExpMatch(host, "*.teams.microsoft.com")) {return DIRECT;}
      if (shExpMatch(host, "autologon.microsoftazuread-sso.com")) {return DIRECT;}
      if (shExpMatch(host, "adminwebservice.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "becws.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "companymanager.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "login.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "device.login.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "logincert.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "loginex.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "login-us.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "passwordreset.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "api.passwordreset.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "portal.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "provisioningapi.microsoftonline.com")) {return DIRECT;}
      if (shExpMatch(host, "login.microsoftonline-p.com")) {return DIRECT;}
      if (shExpMatch(host, "nexus.microsoftonline-p.com")) {return DIRECT;}
      if (shExpMatch(host, "*.msftidentity.com")) {return DIRECT;}
      if (shExpMatch(host, "*.msidentity.com")) {return DIRECT;}
      if (shExpMatch(host, "student.mylexia.com")) {return DIRECT;}
      if (shExpMatch(host, "home.office.com")) {return DIRECT;}
      if (shExpMatch(host, "manage.office.com")) {return DIRECT;}
      if (shExpMatch(host, "*.manage.office.com")) {return DIRECT;}
      if (shExpMatch(host, "outlook.office.com")) {return DIRECT;}
      if (shExpMatch(host, "portal.office.com")) {return DIRECT;}
      if (shExpMatch(host, "protection.office.com")) {return DIRECT;}
      if (shExpMatch(host, "*.protection.office.com")) {return DIRECT;}
      if (shExpMatch(host, "www.office.com")) {return DIRECT;}
      if (shExpMatch(host, "*.office365.com")) {return DIRECT;}
      if (shExpMatch(host, "autodiscover-s.outlook.com")) {return DIRECT;}
      if (shExpMatch(host, "db1.risingsoftware.com")) {return DIRECT;}
      if (shExpMatch(host, "db9.risingsoftware.com")) {return DIRECT;}
      if (shExpMatch(host, "ms1.risingsoftware.com")) {return DIRECT;}
      if (shExpMatch(host, "ms2.risingsoftware.com")) {return DIRECT;}
      if (shExpMatch(host, "ms3.risingsoftware.com")) {return DIRECT;}
      if (shExpMatch(host, "qedu.sharepoint.com")) {return DIRECT;}
      if (shExpMatch(host, "qeducorp.sharepoint.com")) {return DIRECT;}
      if (shExpMatch(host, "qeducorp-my.sharepoint.com")) {return DIRECT;}
      if (shExpMatch(host, "qedu-my.sharepoint.com")) {return DIRECT;}
      if (shExpMatch(host, "sds.sydneyoperahouse.com")) {return DIRECT;}
      if (shExpMatch(host, "portal.digitalbusiness.telstra.com")) {return DIRECT;}
      if (shExpMatch(host, "*.nipt.telstra.com")) {return DIRECT;}
      if (shExpMatch(host, "*.tipt.telstra.com")) {return DIRECT;}
      if (shExpMatch(host, "account.activedirectory.windowsazure.com")) {return DIRECT;}
      if (shExpMatch(host, "b1.learnspace3d.de")) {return DIRECT;}
      if (shExpMatch(host, "mel0204adspagemaintenance.azureedge.net")) {return DIRECT;}
      if (shExpMatch(host, "teachscape.vo.llnwd.net")) {return DIRECT;}
      if (shExpMatch(host, "teachtwo.vo.llnwd.net")) {return DIRECT;}
      if (shExpMatch(host, "clientconfig.microsoftonline-p.net")) {return DIRECT;}
      if (shExpMatch(host, "account.office.net")) {return DIRECT;}
      if (shExpMatch(host, "accounts.accesscontrol.windows.net")) {return DIRECT;}
      if (shExpMatch(host, "graph.windows.net")) {return DIRECT;}
      if (shExpMatch(host, "login.windows.net")) {return DIRECT;}
      if (shExpMatch(host, "zoom.us")) {return DIRECT;}
      if (shExpMatch(host, "*.zoom.us")) {return DIRECT;}
      if (shExpMatch(host, "*screencast-o-matic.com")) {return DIRECT;}
      if (shExpMatch(host, "cloud.soundscouts.com.au")) {return DIRECT;}
      if (shExpMatch(host, "dms.digitalbusiness.telstra.com")) {return DIRECT;}
      if (shExpMatch(host, "admin.yourpassporttoqld.com.au")) {return DIRECT;}
      if (shExpMatch(host, "ftp.softlinkint.com")) {return DIRECT;}
      if (shExpMatch(host, "cc-api-teamprojects-an1.adobe.io")) {return DIRECT;}
      if (shExpMatch(host, "p13n.adobe.io")) {return DIRECT;}
      if (shExpMatch(host, "odin.adobe.com")) {return DIRECT;}
      if (shExpMatch(host, "ggsa-lma-node.azurewebsites.net")) {return DIRECT;}

      /*** Return proxy for remaining traffic ***/
      return PROXY;
}
