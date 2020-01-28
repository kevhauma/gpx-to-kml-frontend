export default createFile

function createFile(string){
    return `${getStart()}
    ${string}
    </Document>
</kml>`.trim()
}



function getStart() {
    return '<?xml version="1.0" encoding="UTF-8"?>' + `
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
    <Document>
    <name>imported on ${getYYYYMMDD(new Date())}</name>
	<open>1</open>
    <Style id="multiTrack_h140">
		<IconStyle>
			<color>00ffffff</color>
			<scale>1</scale>
			<Icon>
				<href>http://earth.google.com/images/kml-icons/track-directional/track-0.png</href>
			</Icon>
		</IconStyle>
		<LabelStyle>
			<color>ffffffff</color>
		</LabelStyle>
		<LineStyle>
			<color>99ffac59</color>
			<width>8</width>
		</LineStyle>
	</Style>
	<StyleMap id="multiTrack310">
		<Pair>
			<key>normal</key>
			<styleUrl>#multiTrack_n710</styleUrl>
		</Pair>
	</StyleMap>
	<Style id="multiTrack_n710">
		<IconStyle>
			<color>00ffffff</color>
			<Icon>
				<href>http://earth.google.com/images/kml-icons/track-directional/track-0.png</href>
			</Icon>
		</IconStyle>
		<LabelStyle>
			<color>00ffffff</color>
		</LabelStyle>
		<LineStyle>
			<color>99ffac59</color>
			<width>6</width>
		</LineStyle>
	</Style>`
}

function getYYYYMMDD(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
