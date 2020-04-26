// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "GSM2589734", "MDA231-LM2_DMSO_Vehicle, biological rep1", "GSM2589734", "Public on Aug 26 2018", "Apr 26 2017", "Aug 27 2018", "RNA", "1", "MDA231-LM2 breast cancer cells, treated with DMSO vehicle, 48h", "Homo sapiens", "cell line: MDA231-LM2", "tissue type: breast cancer", "treatment: DMSO_Vehicle", "MDA231-LM2 cells were seeded at a density of approximately 28.000 cells/cm2 and let to attach to the culture dish overnight. Then cells were treated with either a vehicle control (DMSO) or 5nM paclitaxel for 48h prior to lysis for RNA extraction.", "MDA231-LM2 cells were grown in DMEM GlutaMAX supplemented with 10% vol/vol fetal bovine serum (FBS), 100 IU/ml penicillin, 100 μg/ml streptomycin and 1 μg/ml amphotericin B.", "total RNA", "RNA extraction was performed using the RNEasy Kit (Qiagen) according to manufacturer's instructions", "biotin", "The Affymetrix Gene Chip 3´IVT PLUS Reagent Kit was used to generate labeled single-stranded cRNA from input amounts of 100ng total RNA. The label used was biotin.", "9606", "11 ug of fragmented and labeled cRNA were hybridized for 17 hours at 45°C on Affymetrix GeneChip® Human Genome U133 Plus 2.0 Arrays, according to user manual GeneChip® 3' IVT PLUS Reagent Kit, P/N 703210.", "Gene Expression Microarrays were scanned using the Affymetrix GeneChip® Scanner 3000 according to GeneChip® Expression Wash, Stain and Scan Manual for Cartridge Arrays  (P/N 702731)", "Gene expression of MDA231-LM2 cells cultured as a monolayer", "The raw data was processed using R and bioconductor package affy; normalization method is quantile normalization.", "GPL570", "Jacob,,Insua-Rodríguez", "j.insuarodriguez dkfz.de", "Oskarsson Lab", "Division of Stem Cells and Cancer", "German Cancer Research Center (Deutsches Krebsforschungszentrum, DKFZ)", "Im Neuenheimer Feld 280", "Heidelberg", "Baden-Württemberg", "69120", "Germany", "ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM2589nnn/GSM2589734/suppl/GSM2589734_DMSO_1.CEL.gz", "54675", "MDA231-LM2", "breast cancer", "DMSO_Vehicle" ], [ "2", "GSM2589735", "MDA231-LM2_DMSO_Vehicle, biological rep2", "GSM2589735", "Public on Aug 26 2018", "Apr 26 2017", "Aug 27 2018", "RNA", "1", "MDA231-LM2 breast cancer cells, treated with DMSO vehicle, 48h", "Homo sapiens", "cell line: MDA231-LM2", "tissue type: breast cancer", "treatment: DMSO_Vehicle", "MDA231-LM2 cells were seeded at a density of approximately 28.000 cells/cm2 and let to attach to the culture dish overnight. Then cells were treated with either a vehicle control (DMSO) or 5nM paclitaxel for 48h prior to lysis for RNA extraction.", "MDA231-LM2 cells were grown in DMEM GlutaMAX supplemented with 10% vol/vol fetal bovine serum (FBS), 100 IU/ml penicillin, 100 μg/ml streptomycin and 1 μg/ml amphotericin B.", "total RNA", "RNA extraction was performed using the RNEasy Kit (Qiagen) according to manufacturer's instructions", "biotin", "The Affymetrix Gene Chip 3´IVT PLUS Reagent Kit was used to generate labeled single-stranded cRNA from input amounts of 100ng total RNA. The label used was biotin.", "9606", "11 ug of fragmented and labeled cRNA were hybridized for 17 hours at 45°C on Affymetrix GeneChip® Human Genome U133 Plus 2.0 Arrays, according to user manual GeneChip® 3' IVT PLUS Reagent Kit, P/N 703210.", "Gene Expression Microarrays were scanned using the Affymetrix GeneChip® Scanner 3000 according to GeneChip® Expression Wash, Stain and Scan Manual for Cartridge Arrays  (P/N 702731)", "Gene expression of MDA231-LM2 cells cultured as a monolayer", "The raw data was processed using R and bioconductor package affy; normalization method is quantile normalization.", "GPL570", "Jacob,,Insua-Rodríguez", "j.insuarodriguez dkfz.de", "Oskarsson Lab", "Division of Stem Cells and Cancer", "German Cancer Research Center (Deutsches Krebsforschungszentrum, DKFZ)", "Im Neuenheimer Feld 280", "Heidelberg", "Baden-Württemberg", "69120", "Germany", "ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM2589nnn/GSM2589735/suppl/GSM2589735_DMSO_2.CEL.gz", "54675", "MDA231-LM2", "breast cancer", "DMSO_Vehicle" ], [ "3", "GSM2589736", "MDA231-LM2_DMSO_Vehicle, biological rep3", "GSM2589736", "Public on Aug 26 2018", "Apr 26 2017", "Aug 27 2018", "RNA", "1", "MDA231-LM2 breast cancer cells, treated with DMSO vehicle, 48h", "Homo sapiens", "cell line: MDA231-LM2", "tissue type: breast cancer", "treatment: DMSO_Vehicle", "MDA231-LM2 cells were seeded at a density of approximately 28.000 cells/cm2 and let to attach to the culture dish overnight. Then cells were treated with either a vehicle control (DMSO) or 5nM paclitaxel for 48h prior to lysis for RNA extraction.", "MDA231-LM2 cells were grown in DMEM GlutaMAX supplemented with 10% vol/vol fetal bovine serum (FBS), 100 IU/ml penicillin, 100 μg/ml streptomycin and 1 μg/ml amphotericin B.", "total RNA", "RNA extraction was performed using the RNEasy Kit (Qiagen) according to manufacturer's instructions", "biotin", "The Affymetrix Gene Chip 3´IVT PLUS Reagent Kit was used to generate labeled single-stranded cRNA from input amounts of 100ng total RNA. The label used was biotin.", "9606", "11 ug of fragmented and labeled cRNA were hybridized for 17 hours at 45°C on Affymetrix GeneChip® Human Genome U133 Plus 2.0 Arrays, according to user manual GeneChip® 3' IVT PLUS Reagent Kit, P/N 703210.", "Gene Expression Microarrays were scanned using the Affymetrix GeneChip® Scanner 3000 according to GeneChip® Expression Wash, Stain and Scan Manual for Cartridge Arrays  (P/N 702731)", "Gene expression of MDA231-LM2 cells cultured as a monolayer", "The raw data was processed using R and bioconductor package affy; normalization method is quantile normalization.", "GPL570", "Jacob,,Insua-Rodríguez", "j.insuarodriguez dkfz.de", "Oskarsson Lab", "Division of Stem Cells and Cancer", "German Cancer Research Center (Deutsches Krebsforschungszentrum, DKFZ)", "Im Neuenheimer Feld 280", "Heidelberg", "Baden-Württemberg", "69120", "Germany", "ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM2589nnn/GSM2589736/suppl/GSM2589736_DMSO_3.CEL.gz", "54675", "MDA231-LM2", "breast cancer", "DMSO_Vehicle" ], [ "4", "GSM2589737", "MDA231-LM2_Paclitaxel, biological rep1", "GSM2589737", "Public on Aug 26 2018", "Apr 26 2017", "Aug 27 2018", "RNA", "1", "MDA231-LM2 breast cancer cells, treated with paclitaxel 5nM, 48h", "Homo sapiens", "cell line: MDA231-LM2", "tissue type: breast cancer", "treatment: Paclitaxel_5nM", "MDA231-LM2 cells were seeded at a density of approximately 28.000 cells/cm2 and let to attach to the culture dish overnight. Then cells were treated with either a vehicle control (DMSO) or 5nM paclitaxel for 48h prior to lysis for RNA extraction.", "MDA231-LM2 cells were grown in DMEM GlutaMAX supplemented with 10% vol/vol fetal bovine serum (FBS), 100 IU/ml penicillin, 100 μg/ml streptomycin and 1 μg/ml amphotericin B.", "total RNA", "RNA extraction was performed using the RNEasy Kit (Qiagen) according to manufacturer's instructions", "biotin", "The Affymetrix Gene Chip 3´IVT PLUS Reagent Kit was used to generate labeled single-stranded cRNA from input amounts of 100ng total RNA. The label used was biotin.", "9606", "11 ug of fragmented and labeled cRNA were hybridized for 17 hours at 45°C on Affymetrix GeneChip® Human Genome U133 Plus 2.0 Arrays, according to user manual GeneChip® 3' IVT PLUS Reagent Kit, P/N 703210.", "Gene Expression Microarrays were scanned using the Affymetrix GeneChip® Scanner 3000 according to GeneChip® Expression Wash, Stain and Scan Manual for Cartridge Arrays  (P/N 702731)", "Gene expression of MDA231-LM2 cells cultured as oncospheres", "The raw data was processed using R and bioconductor package affy; normalization method is quantile normalization.", "GPL570", "Jacob,,Insua-Rodríguez", "j.insuarodriguez dkfz.de", "Oskarsson Lab", "Division of Stem Cells and Cancer", "German Cancer Research Center (Deutsches Krebsforschungszentrum, DKFZ)", "Im Neuenheimer Feld 280", "Heidelberg", "Baden-Württemberg", "69120", "Germany", "ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM2589nnn/GSM2589737/suppl/GSM2589737_Paclitaxel_1.CEL.gz", "54675", "MDA231-LM2", "breast cancer", "Paclitaxel_5nM" ], [ "5", "GSM2589738", "MDA231-LM2_Paclitaxel, biological rep2", "GSM2589738", "Public on Aug 26 2018", "Apr 26 2017", "Aug 27 2018", "RNA", "1", "MDA231-LM2 breast cancer cells, treated with paclitaxel 5nM, 48h", "Homo sapiens", "cell line: MDA231-LM2", "tissue type: breast cancer", "treatment: Paclitaxel_5nM", "MDA231-LM2 cells were seeded at a density of approximately 28.000 cells/cm2 and let to attach to the culture dish overnight. Then cells were treated with either a vehicle control (DMSO) or 5nM paclitaxel for 48h prior to lysis for RNA extraction.", "MDA231-LM2 cells were grown in DMEM GlutaMAX supplemented with 10% vol/vol fetal bovine serum (FBS), 100 IU/ml penicillin, 100 μg/ml streptomycin and 1 μg/ml amphotericin B.", "total RNA", "RNA extraction was performed using the RNEasy Kit (Qiagen) according to manufacturer's instructions", "biotin", "The Affymetrix Gene Chip 3´IVT PLUS Reagent Kit was used to generate labeled single-stranded cRNA from input amounts of 100ng total RNA. The label used was biotin.", "9606", "11 ug of fragmented and labeled cRNA were hybridized for 17 hours at 45°C on Affymetrix GeneChip® Human Genome U133 Plus 2.0 Arrays, according to user manual GeneChip® 3' IVT PLUS Reagent Kit, P/N 703210.", "Gene Expression Microarrays were scanned using the Affymetrix GeneChip® Scanner 3000 according to GeneChip® Expression Wash, Stain and Scan Manual for Cartridge Arrays  (P/N 702731)", "Gene expression of MDA231-LM2 cells cultured as oncospheres", "The raw data was processed using R and bioconductor package affy; normalization method is quantile normalization.", "GPL570", "Jacob,,Insua-Rodríguez", "j.insuarodriguez dkfz.de", "Oskarsson Lab", "Division of Stem Cells and Cancer", "German Cancer Research Center (Deutsches Krebsforschungszentrum, DKFZ)", "Im Neuenheimer Feld 280", "Heidelberg", "Baden-Württemberg", "69120", "Germany", "ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM2589nnn/GSM2589738/suppl/GSM2589738_Paclitaxel_2.CEL.gz", "54675", "MDA231-LM2", "breast cancer", "Paclitaxel_5nM" ], [ "6", "GSM2589739", "MDA231-LM2_Paclitaxel, biological rep3", "GSM2589739", "Public on Aug 26 2018", "Apr 26 2017", "Aug 27 2018", "RNA", "1", "MDA231-LM2 breast cancer cells, treated with paclitaxel 5nM, 48h", "Homo sapiens", "cell line: MDA231-LM2", "tissue type: breast cancer", "treatment: Paclitaxel_5nM", "MDA231-LM2 cells were seeded at a density of approximately 28.000 cells/cm2 and let to attach to the culture dish overnight. Then cells were treated with either a vehicle control (DMSO) or 5nM paclitaxel for 48h prior to lysis for RNA extraction.", "MDA231-LM2 cells were grown in DMEM GlutaMAX supplemented with 10% vol/vol fetal bovine serum (FBS), 100 IU/ml penicillin, 100 μg/ml streptomycin and 1 μg/ml amphotericin B.", "total RNA", "RNA extraction was performed using the RNEasy Kit (Qiagen) according to manufacturer's instructions", "biotin", "The Affymetrix Gene Chip 3´IVT PLUS Reagent Kit was used to generate labeled single-stranded cRNA from input amounts of 100ng total RNA. The label used was biotin.", "9606", "11 ug of fragmented and labeled cRNA were hybridized for 17 hours at 45°C on Affymetrix GeneChip® Human Genome U133 Plus 2.0 Arrays, according to user manual GeneChip® 3' IVT PLUS Reagent Kit, P/N 703210.", "Gene Expression Microarrays were scanned using the Affymetrix GeneChip® Scanner 3000 according to GeneChip® Expression Wash, Stain and Scan Manual for Cartridge Arrays  (P/N 702731)", "Gene expression of MDA231-LM2 cells cultured as oncospheres", "The raw data was processed using R and bioconductor package affy; normalization method is quantile normalization.", "GPL570", "Jacob,,Insua-Rodríguez", "j.insuarodriguez dkfz.de", "Oskarsson Lab", "Division of Stem Cells and Cancer", "German Cancer Research Center (Deutsches Krebsforschungszentrum, DKFZ)", "Im Neuenheimer Feld 280", "Heidelberg", "Baden-Württemberg", "69120", "Germany", "ftp://ftp.ncbi.nlm.nih.gov/geo/samples/GSM2589nnn/GSM2589739/suppl/GSM2589739_Paclitaxel_3.CEL.gz", "54675", "MDA231-LM2", "breast cancer", "Paclitaxel_5nM" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
