'use strict';

(() => {
    // Wallpapers list from https://public.notjustanna.net/wallpapers/
    const baseUrl = "https://public.notjustanna.net/wallpapers/";
    const wallpapers = [
        "AlbaceteSpain.jpg", "AlpineLakes.jpg", "AntarcticaDay.jpg", "Arrone.jpg", "BallyvooneyCove.jpg", 
        "Balsamroot.jpg", "BannerPeak.jpg", "BanyakIslands.jpg", "BarcelonaPop.jpg", "BasaltGiants.jpg", 
        "BathCircus.jpg", "BearHoleBrook.jpg", "BodieNC.jpg", "BoxingDaySunrise.jpg", "BridgeLisbon.jpg", 
        "BridgeNorway.jpg", "BwindiNationalForest.jpg", "CapitolButte.jpg", "CavanCastle.jpg", "ChiesaBianca.jpg", 
        "CliffsEtretat.jpg", "CorfuBeach.jpg", "CoveArch.jpg", "CrestedButteEclispe.jpg", "CumbriaAutumn.jpg", 
        "DarkSkiesDV.jpg", "DevilsMarbles.jpg", "DubrovnikHarbor.jpg", "DugiOtokCroatia.jpg", "Everglades90th.jpg", 
        "FannetteIsland.jpg", "FireFallYosemite.jpg", "FirstCliff.jpg", "FisgardLighthouse.jpg", "FrankensteinFriday.jpg", 
        "FrieslandNetherlands.jpg", "GoldenGateLight.jpg", "GrandCanyonWinter.jpg", "HalfDomeYosemite.jpg", "HalfwayBoats.jpg", 
        "HanaHighway.jpg", "HiddenBeach.jpg", "HighArchChina.jpg", "IcebergsAntarctica.jpg", "JavaBromo.jpg", 
        "JediMonastery.jpg", "JejuIsland.jpg", "KeyWestBridge.jpg", "KilchurnAutumn.jpg", "KlostersSerneus.jpg", 
        "KornatiNP.jpg", "LamplughGlacier.jpg", "LasLagunas.jpg", "LesBravesNormandy.jpg", "LickObservatory.jpg", 
        "LoganClouds.jpg", "LongsPeak.jpg", "MWDolomites.jpg", "ManarolaItaly.jpg", "MangroveDay.jpg", 
        "MarbleCanyon.jpg", "MethoniCastle.jpg", "MichiganLighthouse.jpg", "MoabCycling.jpg", "MolokiniHawaii.jpg", 
        "MonksMound.jpg", "MontBlancMassif.jpg", "MoonValley.jpg", "MoroccoMilkyWay.jpg", "MoselleRiver.jpg", 
        "MountCetatea.jpg", "MountSegla.jpg", "MtStMichel.jpg", "NamibiaCanyon.jpg", "NegratinSpain.jpg", 
        "NoahBeach.jpg", "NorthSeaStairs.jpg", "OiaVillage.jpg", "OldFortress.jpg", "OmijimaIsland.jpg", 
        "PeakDistrictNP.jpg", "PerseidsOregon.jpg", "PicoVolcano.jpg", "PointReyes.jpg", "Popocatepetl.jpg", 
        "PortMarseille.jpg", "PorthcawlLighthouse.jpg", "PuebloNankoweap.jpg", "PunchBowl.jpg", "RapadalenSNP.jpg", 
        "RedMangrove.jpg", "RioNegro.jpg", "RumeliHisari.jpg", "SGIMontenegro.jpg", "SaltDesert.jpg", 
        "SanGiovanni.jpg", "SanJuanIslands.jpg", "SantaCruzSunrise.jpg", "SemoisRiver.jpg", "ShadowEverest.jpg", 
        "SharkFinCove.jpg", "ShiShiBeach.jpg", "SkogafossWaterfall.jpg", "SnakeRiverTeton.jpg", "SonomaCoast.jpg", 
        "SouthKaibabTrail.jpg", "SouthPadre.jpg", "SplugenPass.jpg", "StFiniansBay.jpg", "StonehengeSalisbury.jpg", 
        "SvalbardSun.jpg", "TateishiPark.jpg", "TheChaps.jpg", "TrulliGrove.jpg", "TrunkBay.jpg", 
        "VernazzaItaly.jpg", "WaitangiFjordlandNP.jpg", "WalkingCentral.jpg", "WartburgCastle.jpg", "YellowstoneFalls.jpg", 
        "YellowstoneUGB.jpg", "YoshinoyamaSpring.jpg", "ZafraCastle.jpg" 
    ];
    
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / 1000 / 60 / 60 / 24);
    const wallpaperUrl = baseUrl + wallpapers[dayOfYear % wallpapers.length];

    const style = document.createElement('style');
    style.textContent = `
    @media (min-width: 768px) {
        .login-pf body {
            background: url("${wallpaperUrl}") no-repeat center center fixed;
            background-size: cover;
            height: 100%;
        }
    }
    `;
    document.head.appendChild(style);
})();
