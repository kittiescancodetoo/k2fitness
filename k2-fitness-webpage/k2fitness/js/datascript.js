/*------------------------------------Drawing the table with dataTables plug-in-------------------------------*/
$(document).ready(function() {
		
    var table = $('#myTable1').DataTable( {
        data: dataSet1, //data source
		
		//Define the columns
        "columns": [
            { title: "Megnevezés", "orderable": false, "width":"45%",  },
            { title: "Normál ár", "orderable": false, "width":"10%", },
            { title: "Klubtag ár", "orderable": false, "width":"10%", },
			{ title: "Klubtag Okos ár", "orderable": false, "width":"10%", },
			{ title: "Érvényesség", "orderable": false, "width":"10%", },
        ],
		
		"columnDefs": [
			{ className: "first-column", "targets": [ 0 ]},
			{ className: "second-column", "targets": [ 1 ]},
			{ className: "second-column", "targets": [ 2 ]},
			{ className: "second-column", "targets": [ 3 ]},
			{ className: "second-column", "targets": [ 4 ]}
		],
		
		"paging": false,
        "order": [], //do not order
		"dom": '<<t>Bi>',
		
		
		// Button for adding 10 more entries
		buttons: [
            {	
                text: 'SHOW MORE',
                action: function ( e, dt, node, config, ) {
                    table.page.len( x ).draw();
					x += 10;
                }
            }
        ]
		
    } );

			
    var table = $('#myTable2').DataTable( {
        data: dataSet2, //data source
		
		//Define the columns
        "columns": [
            { title: "Megnevezés", "orderable": false, "width":"45%",  },
            { title: "Normál ár", "orderable": false, "width":"10%", },
            { title: "Klubtag ár", "orderable": false, "width":"10%", },
			{ title: "Klubtag Okos ár", "orderable": false, "width":"10%", },
			{ title: "Érvényesség", "orderable": false, "width":"10%", },
        ],
		
		"columnDefs": [
			{ className: "first-column", "targets": [ 0 ]},
			{ className: "second-column", "targets": [ 1 ]},
			{ className: "second-column", "targets": [ 2 ]},
			{ className: "second-column", "targets": [ 3 ]},
			{ className: "second-column", "targets": [ 4 ]}
		],
		
		"paging": false,
        "order": [], //do not order
		"dom": '<<t>Bi>',
		
		
		// Button for adding 10 more entries
		buttons: [
            {	
                text: 'SHOW MORE',
                action: function ( e, dt, node, config, ) {
                    table.page.len( x ).draw();
					x += 10;
                }
            }
        ]
		
    } );
	
	    var table = $('#myTable3').DataTable( {
        data: dataSet3, //data source
		
		//Define the columns
        "columns": [
            { title: "Megnevezés", "orderable": false, "width":"45%",  },
            { title: "Ár", "orderable": false, "width":"10%", },
            { title: "Időtartam", "orderable": false, "width":"10%", },
		
        ],
		
		"columnDefs": [
			{ className: "first-column", "targets": [ 0 ]},
			{ className: "second-column", "targets": [ 1 ]},
			{ className: "second-column", "targets": [ 2 ]},
		
		],
		
		"paging": false,
        "order": [], //do not order
		"dom": '<<t>Bi>',
		
		
		// Button for adding 10 more entries
		buttons: [
            {	
                text: 'SHOW MORE',
                action: function ( e, dt, node, config, ) {
                    table.page.len( x ).draw();
					x += 10;
                }
            }
        ]
		
    } );
	
	var table = $('#myTable4').DataTable( {
        data: dataSet4, //data source
		
		//Define the columns
        "columns": [
            { title: "Megnevezés", "orderable": false, "width":"45%",  },
            { title: "Ár", "orderable": false, "width":"10%", },
            { title: "Tartalom", "orderable": false, "width":"10%", },
		
        ],
		
		"columnDefs": [
			{ className: "first-column", "targets": [ 0 ]},
			{ className: "second-column", "targets": [ 1 ]},
			{ className: "second-column", "targets": [ 2 ]},
		
		],
		
		"paging": false,
        "order": [], //do not order
		"dom": '<<t>Bi>',
		
		
		// Button for adding 10 more entries
		buttons: [
            {	
                text: 'SHOW MORE',
                action: function ( e, dt, node, config, ) {
                    table.page.len( x ).draw();
					x += 10;
                }
            }
        ]
		
    } );
	
	
	
} ); 
