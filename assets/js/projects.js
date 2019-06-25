(function() {
    $(document).ready(function() {

        $('#ProjectsTable thead tr').clone(true).appendTo( '#ProjectsTable thead' );
        $('#ProjectsTable thead tr:eq(1) th').each( function (i) {
            
            var title = $(this).text();
            
            if (title == "Actions") {
                $(this).html('<button role="button" type="button" class="btn btn-ecr-secondary" id="ClearFilters">Clear Filters</button>');
                var outerContext = $(this);
                $("#ClearFilters", outerContext).click(function() {
                    $(".column-filter").val("");
                    table
                        .columns()
                        .search("")
                        .draw();
                });
            }
            else if (title == "Download") {
                $(this).html("");
            }
            else {
                $(this).html( '<input class="column-filter" type="text" placeholder="Search '+title+'" />' );

                $( 'input', this ).on( 'keyup change', function () {
                    if ( table.column(i).search() !== this.value ) {
                        table
                            .column(i)
                            .search( this.value )
                            .draw();
                    }
                } );
            }
        } );

        var table = $("#ProjectsTable").DataTable({
            responsive: true,
            orderCellsTop: true,
            dom: "lrtip",
            columnDefs: [
                { "orderable": false, "targets": [3,4]}
            ]
        });
    });
})();