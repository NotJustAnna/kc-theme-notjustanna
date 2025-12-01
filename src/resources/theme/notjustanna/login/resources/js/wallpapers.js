'use strict';

(() => {
    const wallpapers = [
        "https://public.notjustanna.net/wallpapers/AlbaceteSpain.jpg",
        "https://public.notjustanna.net/wallpapers/AlpineLakes.jpg",
        "https://public.notjustanna.net/wallpapers/AntarcticaDay.jpg",
        "https://public.notjustanna.net/wallpapers/Arrone.jpg",
        "https://public.notjustanna.net/wallpapers/BallyvooneyCove.jpg",
        "https://public.notjustanna.net/wallpapers/Balsamroot.jpg",
        "https://public.notjustanna.net/wallpapers/BannerPeak.jpg",
        "https://public.notjustanna.net/wallpapers/BanyakIslands.jpg",
        "https://public.notjustanna.net/wallpapers/BarcelonaPop.jpg",
        "https://public.notjustanna.net/wallpapers/BasaltGiants.jpg",
        "https://public.notjustanna.net/wallpapers/BathCircus.jpg",
        "https://public.notjustanna.net/wallpapers/BearHoleBrook.jpg",
        "https://public.notjustanna.net/wallpapers/BodieNC.jpg",
        "https://public.notjustanna.net/wallpapers/BoxingDaySunrise.jpg",
        "https://public.notjustanna.net/wallpapers/BridgeLisbon.jpg",
        "https://public.notjustanna.net/wallpapers/BridgeNorway.jpg",
        "https://public.notjustanna.net/wallpapers/BwindiNationalForest.jpg",
        "https://public.notjustanna.net/wallpapers/CapitolButte.jpg",
        "https://public.notjustanna.net/wallpapers/CavanCastle.jpg",
        "https://public.notjustanna.net/wallpapers/ChiesaBianca.jpg",
        "https://public.notjustanna.net/wallpapers/CliffsEtretat.jpg",
        "https://public.notjustanna.net/wallpapers/CorfuBeach.jpg",
        "https://public.notjustanna.net/wallpapers/CoveArch.jpg",
        "https://public.notjustanna.net/wallpapers/CrestedButteEclispe.jpg",
        "https://public.notjustanna.net/wallpapers/CumbriaAutumn.jpg",
        "https://public.notjustanna.net/wallpapers/DarkSkiesDV.jpg",
        "https://public.notjustanna.net/wallpapers/DevilsMarbles.jpg",
        "https://public.notjustanna.net/wallpapers/DubrovnikHarbor.jpg",
        "https://public.notjustanna.net/wallpapers/DugiOtokCroatia.jpg",
        "https://public.notjustanna.net/wallpapers/Everglades90th.jpg",
        "https://public.notjustanna.net/wallpapers/FannetteIsland.jpg",
        "https://public.notjustanna.net/wallpapers/FireFallYosemite.jpg",
        "https://public.notjustanna.net/wallpapers/FirstCliff.jpg",
        "https://public.notjustanna.net/wallpapers/FisgardLighthouse.jpg",
        "https://public.notjustanna.net/wallpapers/FrankensteinFriday.jpg",
        "https://public.notjustanna.net/wallpapers/FrieslandNetherlands.jpg",
        "https://public.notjustanna.net/wallpapers/GoldenGateLight.jpg",
        "https://public.notjustanna.net/wallpapers/GrandCanyonWinter.jpg",
        "https://public.notjustanna.net/wallpapers/HalfDomeYosemite.jpg",
        "https://public.notjustanna.net/wallpapers/HalfwayBoats.jpg",
        "https://public.notjustanna.net/wallpapers/HanaHighway.jpg",
        "https://public.notjustanna.net/wallpapers/HiddenBeach.jpg",
        "https://public.notjustanna.net/wallpapers/HighArchChina.jpg",
        "https://public.notjustanna.net/wallpapers/IcebergsAntarctica.jpg",
        "https://public.notjustanna.net/wallpapers/JavaBromo.jpg",
        "https://public.notjustanna.net/wallpapers/JediMonastery.jpg",
        "https://public.notjustanna.net/wallpapers/JejuIsland.jpg",
        "https://public.notjustanna.net/wallpapers/KeyWestBridge.jpg",
        "https://public.notjustanna.net/wallpapers/KilchurnAutumn.jpg",
        "https://public.notjustanna.net/wallpapers/KlostersSerneus.jpg",
        "https://public.notjustanna.net/wallpapers/KornatiNP.jpg",
        "https://public.notjustanna.net/wallpapers/LamplughGlacier.jpg",
        "https://public.notjustanna.net/wallpapers/LasLagunas.jpg",
        "https://public.notjustanna.net/wallpapers/LesBravesNormandy.jpg",
        "https://public.notjustanna.net/wallpapers/LickObservatory.jpg",
        "https://public.notjustanna.net/wallpapers/LoganClouds.jpg",
        "https://public.notjustanna.net/wallpapers/LongsPeak.jpg",
        "https://public.notjustanna.net/wallpapers/MWDolomites.jpg",
        "https://public.notjustanna.net/wallpapers/ManarolaItaly.jpg",
        "https://public.notjustanna.net/wallpapers/MangroveDay.jpg",
        "https://public.notjustanna.net/wallpapers/MarbleCanyon.jpg",
        "https://public.notjustanna.net/wallpapers/MethoniCastle.jpg",
        "https://public.notjustanna.net/wallpapers/MichiganLighthouse.jpg",
        "https://public.notjustanna.net/wallpapers/MoabCycling.jpg",
        "https://public.notjustanna.net/wallpapers/MolokiniHawaii.jpg",
        "https://public.notjustanna.net/wallpapers/MonksMound.jpg",
        "https://public.notjustanna.net/wallpapers/MontBlancMassif.jpg",
        "https://public.notjustanna.net/wallpapers/MoonValley.jpg",
        "https://public.notjustanna.net/wallpapers/MoroccoMilkyWay.jpg",
        "https://public.notjustanna.net/wallpapers/MoselleRiver.jpg",
        "https://public.notjustanna.net/wallpapers/MountCetatea.jpg",
        "https://public.notjustanna.net/wallpapers/MountSegla.jpg",
        "https://public.notjustanna.net/wallpapers/MtStMichel.jpg",
        "https://public.notjustanna.net/wallpapers/NamibiaCanyon.jpg",
        "https://public.notjustanna.net/wallpapers/NegratinSpain.jpg",
        "https://public.notjustanna.net/wallpapers/NoahBeach.jpg",
        "https://public.notjustanna.net/wallpapers/NorthSeaStairs.jpg",
        "https://public.notjustanna.net/wallpapers/OiaVillage.jpg",
        "https://public.notjustanna.net/wallpapers/OldFortress.jpg",
        "https://public.notjustanna.net/wallpapers/OmijimaIsland.jpg",
        "https://public.notjustanna.net/wallpapers/PeakDistrictNP.jpg",
        "https://public.notjustanna.net/wallpapers/PerseidsOregon.jpg",
        "https://public.notjustanna.net/wallpapers/PicoVolcano.jpg",
        "https://public.notjustanna.net/wallpapers/PointReyes.jpg",
        "https://public.notjustanna.net/wallpapers/Popocatepetl.jpg",
        "https://public.notjustanna.net/wallpapers/PortMarseille.jpg",
        "https://public.notjustanna.net/wallpapers/PorthcawlLighthouse.jpg",
        "https://public.notjustanna.net/wallpapers/PuebloNankoweap.jpg",
        "https://public.notjustanna.net/wallpapers/PunchBowl.jpg",
        "https://public.notjustanna.net/wallpapers/RapadalenSNP.jpg",
        "https://public.notjustanna.net/wallpapers/RedMangrove.jpg",
        "https://public.notjustanna.net/wallpapers/RioNegro.jpg",
        "https://public.notjustanna.net/wallpapers/RumeliHisari.jpg",
        "https://public.notjustanna.net/wallpapers/SGIMontenegro.jpg",
        "https://public.notjustanna.net/wallpapers/SaltDesert.jpg",
        "https://public.notjustanna.net/wallpapers/SanGiovanni.jpg",
        "https://public.notjustanna.net/wallpapers/SanJuanIslands.jpg",
        "https://public.notjustanna.net/wallpapers/SantaCruzSunrise.jpg",
        "https://public.notjustanna.net/wallpapers/SemoisRiver.jpg",
        "https://public.notjustanna.net/wallpapers/ShadowEverest.jpg",
        "https://public.notjustanna.net/wallpapers/SharkFinCove.jpg",
        "https://public.notjustanna.net/wallpapers/ShiShiBeach.jpg",
        "https://public.notjustanna.net/wallpapers/SkogafossWaterfall.jpg",
        "https://public.notjustanna.net/wallpapers/SnakeRiverTeton.jpg",
        "https://public.notjustanna.net/wallpapers/SonomaCoast.jpg",
        "https://public.notjustanna.net/wallpapers/SouthKaibabTrail.jpg",
        "https://public.notjustanna.net/wallpapers/SouthPadre.jpg",
        "https://public.notjustanna.net/wallpapers/SplugenPass.jpg",
        "https://public.notjustanna.net/wallpapers/StFiniansBay.jpg",
        "https://public.notjustanna.net/wallpapers/StonehengeSalisbury.jpg",
        "https://public.notjustanna.net/wallpapers/SvalbardSun.jpg",
        "https://public.notjustanna.net/wallpapers/TateishiPark.jpg",
        "https://public.notjustanna.net/wallpapers/TheChaps.jpg",
        "https://public.notjustanna.net/wallpapers/TrulliGrove.jpg",
        "https://public.notjustanna.net/wallpapers/TrunkBay.jpg",
        "https://public.notjustanna.net/wallpapers/VernazzaItaly.jpg",
        "https://public.notjustanna.net/wallpapers/WaitangiFjordlandNP.jpg",
        "https://public.notjustanna.net/wallpapers/WalkingCentral.jpg",
        "https://public.notjustanna.net/wallpapers/WartburgCastle.jpg",
        "https://public.notjustanna.net/wallpapers/YellowstoneFalls.jpg",
        "https://public.notjustanna.net/wallpapers/YellowstoneUGB.jpg",
        "https://public.notjustanna.net/wallpapers/YoshinoyamaSpring.jpg",
        "https://public.notjustanna.net/wallpapers/ZafraCastle.jpg"
    ];
    
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / 1000 / 60 / 60 / 24);
    const wallpaperUrl = wallpapers[dayOfYear % wallpapers.length];

    const wallpaperDiv = document.createElement('div');
    wallpaperDiv.className = 'kc-wallpaper';
    const img = document.createElement('img');
    img.src = wallpaperUrl;
    img.alt = 'Background';
    img.className = 'kc-wallpaper-img';
    wallpaperDiv.appendChild(img);

    const tryAppend = () => {
        try {
            document.body.appendChild(wallpaperDiv);
        } catch (e) {
            // ignore if body not available yet
        }
    };

    if (document.body) {
        tryAppend();
    } else {
        const observer = new MutationObserver((_, obs) => {
            if (document.body) {
                tryAppend();
                obs.disconnect();
            }
        });
        observer.observe(document.documentElement, {childList: true});
        // fallback in case DOMContentLoaded is fired later
        document.addEventListener('DOMContentLoaded', () => {
            tryAppend();
            observer.disconnect();
        }, {once: true});
    }
})();
