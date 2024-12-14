// ------------------------------------------------------------------
// (c) 2011 Thunor <thunorsif@hotmail.com>
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Global Variables
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Functions
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// mainmenuwrite.
// ------------------------------------------------------------------
// On entry:
//	current = 'contents' or 'foreword' etc.

function mainmenuwrite(current) {
	document.write("<ul class='mainmenu'>");

	document.write("<li class='mainmenuitem'><a href='index.html'");
	if (current == 'contents') document.write(" class='current'");
	document.write("><span>Contents</span></a></li>");
													
	document.write("<li class='mainmenuitem'><a href='forewordthunor.html'");
	if (current == 'forewordthunor') document.write(" class='current'");
	document.write("><span>[Thunor's Foreword]</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='foreword.html'");
	if (current == 'foreword') document.write(" class='current'");
	document.write("><span>Foreword</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter01.html'");
	if (current == 'chapter01') document.write(" class='current'");
	document.write("><span>Chapter 1 - An Introduction</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter02.html'");
	if (current == 'chapter02') document.write(" class='current'");
	document.write("><span>Chapter 2 - Introduction to Hexadecimal and Machine Code</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter03.html'");
	if (current == 'chapter03') document.write(" class='current'");
	document.write("><span>Chapter 3 - Simple Arithmetic</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter04.html'");
	if (current == 'chapter04') document.write(" class='current'");
	document.write("><span>Chapter 4 - Peeking and Poking and More About Loading</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter05.html'");
	if (current == 'chapter05') document.write(" class='current'");
	document.write("><span>Chapter 5 - More Places to Store Machine Code</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter06.html'");
	if (current == 'chapter06') document.write(" class='current'");
	document.write("><span>Chapter 6 - Stacking and Jumping</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter07.html'");
	if (current == 'chapter07') document.write(" class='current'");
	document.write("><span>Chapter 7 - Printing Things to the Screen</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter08.html'");
	if (current == 'chapter08') document.write(" class='current'");
	document.write("><span>Chapter 8 - A Dictionary of Machine Code</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter09.html'");
	if (current == 'chapter09') document.write(" class='current'");
	document.write("><span>Chapter 9 - A Program to Help You Debug</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter10.html'");
	if (current == 'chapter10') document.write(" class='current'");
	document.write("><span>Chapter 10 - Scanning the Keyboard</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter11.html'");
	if (current == 'chapter11') document.write(" class='current'");
	document.write("><span>Chapter 11 - Draughts Part One</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter12.html'");
	if (current == 'chapter12') document.write(" class='current'");
	document.write("><span>Chapter 12 - A Touch of Culture</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter13.html'");
	if (current == 'chapter13') document.write(" class='current'");
	document.write("><span>Chapter 13 - Draughts Part Two</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter14.html'");
	if (current == 'chapter14') document.write(" class='current'");
	document.write("><span>Chapter 14 - Graphics Games</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter15.html'");
	if (current == 'chapter15') document.write(" class='current'");
	document.write("><span>Chapter 15 - Draughts Part Three</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter16.html'");
	if (current == 'chapter16') document.write(" class='current'");
	document.write("><span>Chapter 16 - How to Disassemble the ROM</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='chapter17.html'");
	if (current == 'chapter17') document.write(" class='current'");
	document.write("><span>Chapter 17 - The Arithmetic Subroutines</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='appendix01.html'");
	if (current == 'appendix01') document.write(" class='current'");
	document.write("><span>Appendix One - A Listing of the Program HEXLD3</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='appendix02.html'");
	if (current == 'appendix02') document.write(" class='current'");
	document.write("><span>Appendix Two - The System Variables</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='appendix03.html'");
	if (current == 'appendix03') document.write(" class='current'");
	document.write("><span>Appendix Three - A Conversion Table from Hex to Assembly</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='appendix04.html'");
	if (current == 'appendix04') document.write(" class='current'");
	document.write("><span>Appendix Four - A Conversion Table from Assembly to Hex</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='appendix05.html'");
	if (current == 'appendix05') document.write(" class='current'");
	document.write("><span>Appendix Five - The ZX Character Set</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='appendix06.html'");
	if (current == 'appendix06') document.write(" class='current'");
	document.write("><span>[Appendix Six - A Listing of the Program Draughts]</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='farewell.html'");
	if (current == 'farewell') document.write(" class='current'");
	document.write("><span>A Farewell Program</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='downloads.html'");
	if (current == 'downloads') document.write(" class='current'");
	document.write("><span>[All Available Downloads]</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='sif-lenslist2.html'");
	if (current == 'lenslist2') document.write(" class='current'");
	document.write("><span>[LENSLIST2]</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='sif-dump.html'");
	if (current == 'dump') document.write(" class='current'");
	document.write("><span>[DUMP]</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='sif-hexld3e.html'");
	if (current == 'hexld3e') document.write(" class='current'");
	document.write("><span>[HEXLD3E]</span></a></li>");

	document.write("<li class='mainmenuitem'><a href='sif-disasm.html'");
	if (current == 'disasm') document.write(" class='current'");
	document.write("><span>[DISASM]</span></a></li>");

	document.write("</ul>");
}

