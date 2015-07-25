// (1) dependencies
var utilities = require('./utilities.js');

// (2) private things
var featureClasses = {};
featureClasses['Feature'] = require('../features/Feature.js');
featureClasses['Antenna'] = require('../features/Antenna.js');
featureClasses['BadgeReader'] = require('../features/BadgeReader.js');
featureClasses['Chair'] = require('../features/Chair.js');
featureClasses['Door'] = require('../features/Door.js');
featureClasses['External_wall'] = require('../features/External_wall.js');
featureClasses['FireExtinguisher'] = require('../features/FireExtinguisher.js');
featureClasses['GraphNode'] = require('../features/GraphNode.js');
featureClasses['Hotspot'] = require('../features/Hotspot.js');
featureClasses['Internal_wall'] = require('../features/Internal_wall.js');
featureClasses['Level'] = require('../features/Level.js');
featureClasses['Light'] = require('../features/Light.js');
featureClasses['Room'] = require('../features/Room.js');
featureClasses['Server'] = require('../features/Server.js');
featureClasses['SurveillanceCamera'] = require('../features/SurveillanceCamera.js');
featureClasses['Table'] = require('../features/Table.js');
featureClasses['Window'] = require('../features/Window.js');
featureClasses['Stair'] = require('../features/Stair.js');
featureClasses['Bed'] = require('../features/Bed.js');
featureClasses['Beuta'] = require('../features/Beuta.js');
featureClasses['BanconeLab'] = require('../features/BanconeLab.js');
featureClasses['ArmCass'] = require('../features/ArmCass.js');
featureClasses['Armadietto'] = require('../features/Armadietto.js');
featureClasses['BanconePiccLab'] = require('../features/BanconePiccLab.js');
featureClasses['BanconeMedLab'] = require('../features/BanconeMedLab.js');
featureClasses['BancoLavandino'] = require('../features/BancoLavandino.js');
featureClasses['ArmadiettiAlti'] = require('../features/ArmadiettiAlti.js');
featureClasses['CellaFrigo'] = require('../features/CellaFrigo.js');
featureClasses['Microscopio'] = require('../features/Microscopio.js');
featureClasses['MonitorPc'] = require('../features/MonitorPc.js');
featureClasses['TorrePc'] = require('../features/TorrePc.js');
featureClasses['Bilancia'] = require('../features/Bilancia.js');
featureClasses['Centrifuga'] = require('../features/Centrifuga.js');
featureClasses['PipettaPasteur'] = require('../features/PipettaPasteur.js');
featureClasses['PortaProvette'] = require('../features/PortaProvette.js');
featureClasses['PompaVuoto'] = require('../features/PompaVuoto.js');
featureClasses['Pipetta'] = require('../features/Pipetta.js');
featureClasses['Frigorifero'] = require('../features/Frigorifero.js');
featureClasses['CentrifugaGrande'] = require('../features/CentrifugaGrande.js');
featureClasses['Cappa'] = require('../features/Cappa.js');
featureClasses['Banco'] = require('../features/Banco.js');
featureClasses['Mensola'] = require('../features/Mensola.js');
featureClasses['Secchio'] = require('../features/Secchio.js');
featureClasses['CappaVirus'] = require('../features/CappaVirus.js');
featureClasses['TavoloTondo'] = require('../features/TavoloTondo.js');
featureClasses['FrigoriferoEma'] = require('../features/FrigoriferoEma.js');
featureClasses['ArmadiettoSpogliatoio'] = require('../features/ArmadiettoSpogliatoio.js');
featureClasses['Archivio'] = require('../features/Archivio.js');
featureClasses['BanconeAngolare'] = require('../features/BanconeAngolare.js');
featureClasses['BancoAcciaioAngolare'] = require('../features/BancoAcciaioAngolare.js');
featureClasses['CassettiBancoLab'] = require('../features/CassettiBancoLab.js');
featureClasses['OggettiLab'] = require('../features/OggettiLab.js');
featureClasses['Lavandino'] = require('../features/Lavandino.js');
featureClasses['Wc'] = require('../features/Wc.js');
featureClasses['SecchioBagno'] = require('../features/SecchioBagno.js');
featureClasses['Asciugamani'] = require('../features/Asciugamani.js');
featureClasses['RotoloCarta'] = require('../features/RotoloCarta.js');
featureClasses['Panca'] = require('../features/Panca.js');
featureClasses['Scaffale'] = require('../features/Scaffale.js');
featureClasses['ScrivaniaUfficio'] = require('../features/ScrivaniaUfficio.js');
featureClasses['Libreria'] = require('../features/Libreria.js');
featureClasses['Cestino'] = require('../features/Cestino.js');
featureClasses['Analizzatrice'] = require('../features/Analizzatrice.js');
featureClasses['MonitorPcAnalizzatore'] = require('../features/MonitorPcAnalizzatore.js');
featureClasses['IncubatriceCO2'] = require('../features/IncubatriceCO2.js');
featureClasses['Agitatore'] = require('../features/Agitatore.js');
featureClasses['PortaProvetteSangue'] = require('../features/PortaProvetteSangue.js');
featureClasses['PosterVir1'] = require('../features/PosterVir1.js');
featureClasses['PosterVir2'] = require('../features/PosterVir2.js');
featureClasses['CartelloVirologia'] = require('../features/CartelloVirologia.js');
featureClasses['PosterMicr1'] = require('../features/PosterMicr1.js');
featureClasses['PosterMicr2'] = require('../features/PosterMicr2.js');
featureClasses['CartelloMicrobiologia'] = require('../features/CartelloMicrobiologia.js');
featureClasses['PosterEma1'] = require('../features/PosterEma1.js');
featureClasses['PosterEma2'] = require('../features/PosterEma2.js');
featureClasses['Wc_donna'] = require('../features/Wc_donna.js');
featureClasses['Wc_uomo'] = require('../features/Wc_uomo.js');
featureClasses['PosterAcceptation'] = require('../features/PosterAcceptation.js');
featureClasses['Fogli'] = require('../features/Fogli.js');

function capitaliseFirstLetter(featureClass) {
	return featureClass.charAt(0).toUpperCase() + featureClass.slice(1);
}

// (3) public/exported things
var self = module.exports = {
	generateFeature: function(feature) {
		var newFeature;
		var featureClass = capitaliseFirstLetter(feature.properties.class);
		if (featureClass in featureClasses) {
			newFeature = new featureClasses[featureClass](feature);
		} else {
			newFeature = new featureClasses['Feature'](feature);
		}
		return newFeature;
	}
}; //close module.exports