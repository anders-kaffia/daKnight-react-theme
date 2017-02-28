<?php 
/**
*
* Template Name: Team
*
*
*/

get_header('backup'); ?>


<?php $staticimage = get_field('bakgrundsbild'); ?>
<?php the_post(); ?>

<div class="container-fluid visible-md visible-lg" style="display:none;">
	<div class="row">
		<div>
		
		<img id="team" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/team.jpg" alt="Daknight Team" usemap="#Map" />	
		<img class="gray" id="matilda" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/matilda.jpg" alt="matilda" usemap="#Map" />
		<img class="gray" id="mimmi" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/mimmi.jpg" alt="mimmi" usemap="#Map" />
		<img class="gray" id="jonas" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/jonas.jpg" alt="jonas" usemap="#Map" />	
		<img class="gray" id="mikael" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/mikael.jpg" alt="mikael" usemap="#Map" />	
		<img class="gray" id="albert" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/albert.jpg" alt="albert" usemap="#Map" />
		<img class="gray" id="carolin" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/carolin.jpg" alt="carolin" usemap="#Map" />	
		<img class="gray" id="oai" src="<?php echo get_template_directory_uri(); ?>/assets/media/img/bw/oai.jpg" alt="oai" usemap="#Map" />	

			<map name="Map" id="Map">
    			<area alt="matilda" href="#" shape="poly" coords="670,195,645,201,635,212,620,238,608,259,605,282,598,308,581,320,546,326,524,341,501,371,493,403,486,446,485,483,501,504,526,538,541,561,533,584,529,606,538,630,534,658,536,686,540,706,544,735,552,754,559,766,595,694,639,598,664,575,672,576,689,493,709,470,737,463,759,464,772,474,786,491,791,511,800,535,803,563,809,576,826,530,802,454,797,426,778,377,716,244,710,219,691,201" />
    			<area alt="mimmi" href="#" shape="poly" coords="743,476,722,480,702,500,688,526,681,559,681,579,688,609,687,624,656,622,621,667,593,707,572,754,572,789,639,801,681,809,692,851,686,888,690,908,722,926,709,953,710,982,715,1016,723,1058,732,1098,744,1143,739,1192,731,1228,726,1282,734,1307,765,1305,789,1280,801,1234,819,1231,822,1084,830,1026,843,950,858,907,864,880,864,844,857,774,857,743,866,762,862,719,849,660,837,619,787,526,778,499,763,482" />
    			<area alt="albert" href="#" shape="poly" coords="945,492,958,470,982,463,1010,472,1022,484,1024,507,1023,535,1025,549,1016,564,1004,587,965,594,953,596,936,614,917,633,881,650,869,677,890,707,895,736,912,761,925,776,878,848,889,894,919,906,954,920,942,1156,940,1205,943,1263,947,1322,976,1324,1002,1316,1008,1284,1009,1088,1014,1020,1049,1014,1058,1049,1081,1079,1107,1116,1122,1132,1163,1107,1196,1085,1133,1035,1086,964,1082,912,1104,898,1082,819,1104,801,1109,753,1116,685,1104,639,1082,614,960,592,943,549,939,529,939,544,891,768,887,789,890,816,922,778" />
    			<area alt="carolin" href="#" shape="poly" coords="1218,481,1195,498,1179,529,1184,557,1202,585,1211,615,1196,624,1157,639,1210,617,1153,634,1144,660,1126,710,1117,757,1118,786,1120,801,1100,830,1109,855,1118,891,1133,903,1156,913,1176,923,1168,953,1170,997,1170,1046,1217,1078,1214,1107,1204,1203,1193,1256,1154,1270,1146,1237,1165,1165,1178,1121,1208,1094,1230,1072,1244,1007,1267,1020,1272,1046,1288,1084,1309,1126,1312,1145,1348,1133,1371,1117,1338,1082,1312,1047,1287,992,1296,923,1311,896,1308,840,1312,769,1324,721,1331,671,1324,644,1289,625,1261,602,1260,562,1277,550,1276,528,1259,501,1244,490" />
    			<area alt="oai" href="#" shape="poly" coords="1507,138,1476,150,1453,175,1439,206,1437,229,1450,255,1438,270,1415,280,1400,295,1379,297,1347,310,1319,340,1305,375,1291,410,1278,446,1276,474,1290,509,1312,541,1328,575,1322,620,1365,622,1402,646,1401,670,1399,706,1386,745,1371,779,1411,799,1442,810,1438,827,1432,850,1418,860,1408,898,1403,932,1402,955,1428,960,1431,987,1428,1017,1427,1042,1446,1065,1477,1081,1501,1073,1479,993,1486,956,1498,927,1508,860,1520,791,1545,687,1579,564,1584,432,1566,347,1522,315,1500,296,1507,264,1537,222,1542,182,1530,153" />
 				<area alt="mikael" hr href="#" shape="poly" coords="1145,186,1116,183,1087,188,1065,213,1064,257,1082,285,1077,307,1059,318,1013,326,979,372,944,440,926,486,921,553,930,516,941,476,973,452,992,457,1027,467,1035,483,1037,518,1036,543,1030,568,1042,583,1069,592,1093,610,1122,618,1149,616,1187,611,1158,564,1167,503,1185,488,1214,469,1241,473,1234,427,1209,354,1169,332,1136,317,1145,288,1178,256,1175,217,1161,191" />
 				<area alt="jonas" hrhref="#" shape="poly" coords="893,129,876,103,854,92,820,103,808,121,808,150,819,181,833,207,829,229,808,254,781,265,761,301,761,337,785,373,799,398,815,446,819,477,836,511,839,534,828,553,818,571,819,596,837,609,850,621,887,622,911,604,919,500,939,434,965,378,989,338,988,291,978,250,934,235,898,221,883,192,897,165" />
			</map>
			<div class="col-md-2 col-sm-6 personText matilda">
				<h2>Matilda Rask</h2>
				<span>Webbutvecklare</span><br/>				
			</div>	
			<div class="col-md-2 personText mimmi">
				<h2>Mimmi Purits</h2>
				<span>Webbutvecklare</span><br/>				
			</div>
			<div class="col-md-2 personText jonas">
				<h2>Jonas Holmer</h2>
				<span>Systemutvecklare</span><br/>
			</div>	
			<div class="col-md-2 personText mikael">
				<h2>Mikael Henningsson</h2>
				<span>Google Apps och AdWords</span><br/>				
			</div>	
			<div class="col-md-2 personText albert">
				<h2>Albert Elvingsson</h2>
				<span>Byråchef</span><br/>				
			</div>	
			<div class="col-md-2 personText carolin">
				<h2>Carolin Sundquist</h2>
				<span>Koncept och Design</span><br/>		
			</div>	
			<div class="col-md-2 personText oai">
				<h2>Oai Gudmundsson</h2>
				<span>Systemutvecklare</span><br/>	
			</div>		
		</div>
	</div>	
</div>	

<div class="container emails" style="display:none;">
	<div class="row">
		<div class="col-md-2">
			<a href="mailto:matilda@daknight.se">matilda@daknight.se</a>	
		</div>
		
		<div class="col-md-2">
			<a href="mailto:mimmi@daknight.se">mimmi@daknight.se</a>
		</div>

		<div class="col-md-2">
			<a href="mailto:albert@daknight.se">albert@daknight.se</a>
		</div>
		<div class="col-md-2">
			<a href="mailto:mikael@daknight.se">mikael@daknight.se</a>
		</div>
		<div class="col-md-2">
			<a href="mailto:carolin@daknight.se">carolin@daknight.se</a>
		</div>
		<div class="col-md-2">
			<a href="mailto:oai@daknight.se">oai@daknight.se</a>
		</div>
	</div>
</div>


<div class="container margin-top">
    <div class="row">
        <?php

        // check if the repeater field has rows of data
        if( have_rows('medarbetare') ): 
            // loop through the rows of data
            while ( have_rows('medarbetare') ) : the_row(); ?>
                <?php $image = get_sub_field('image'); ?>
                <div class="col-xs-12 col-sm-6 service">
                    <img src="<?php echo $image; ?>" />
                    <h3><?php the_sub_field('name'); ?></h3>
                    <span><?php the_sub_field('title'); ?></span><br>
                    <a href="mailto:<?php the_sub_field('email'); ?>"><?php the_sub_field('email'); ?></a>
                    <?php the_sub_field('content'); ?>
                </div>
            <?php endwhile;

        endif;

        ?>
    </div>
</div>




<?php get_footer('backup'); ?>