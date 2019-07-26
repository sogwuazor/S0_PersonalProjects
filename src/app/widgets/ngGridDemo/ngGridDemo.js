function NgGridDemo(options, element) {
  const _defaults = {
    useId: '_id',
    pageNumber: 1,
    label: '',
    noDataLabel: 'No Data Available!',
    onRendered: null,
    fullWidth: false,
    columns: [],
    data: [],
    galleryMode: false,

    //pagination controls
    perPageNotNeeded: true,
    pageSizeArray: [5, 10, 20, 50, 100],
    pageSize: 10,
    //paging events
    onPageChange: null,
    onPageSizeChange: null
  };

  if (element && element instanceof $) {
    this.element = element;
  } else {
    this.element = null;
    throw new Error('no element provided for grid to be bound to');
  }

  //initialize
  this.initialize(options, _defaults);
}

NgGridDemo.prototype.initialize = function (opts, _defaults) {
  this.options = Object.assign(opts, _defaults);

  this.element.addClass('ngGridContainer');

  this.renderGrid();
};

NgGridDemo.prototype.renderGrid = function () {
  let _this = this;
  let label = this.options.label || this.options.summary || '';
  let $table = $('<table class="ngGrid" role="grid" summary="'+label+'" aria-label="'+label+'"></table>');
  let $tableBody = $('<tbody class="ngGridBody"></tbody>');
  let $header = buildHeader();

  //build table
  $tableBody = buildBody($tableBody);

  //build elements to table
  $table.append($header);
  $table.append($tableBody);

  //build body
  function buildBody($bodyElement) {
    let columnInfo = _this.options.columns,
      tableData = _this.options.data;
    //each item in table data will represent a row of information
    if (tableData.length < 1){
      $bodyElement.append($('<tr><td colspan="'+ columnInfo.length +'">'+_this.options.noDataLabel+'</td></tr>'));
      return $bodyElement;
    }

    //in is for arrays, of if for object arrays
    for (let data of _this.options.data) {
      $bodyElement.append(buildRow(data, columnInfo));
    }

    return $bodyElement;
  }

  //create row
  function buildRow(data, cols) {
    let $row = $('<tr role="row" class="section" tabindex="-1"></tr>');

    $row.data('id', data[_this.options.useId]);
    $row.attr('draggable', false); //future work

    cols.forEach(function(col) {
      //break loop for columns that are not being used
      let $cell = buildCell(data, col);
      $row.append($cell);
    });
    //$row.data(data);

    return $row;
  }

  //createCell
  function buildCell(data, column){
    let cellClass = column.cellClass || '';
    let strWidth = column.width && !Number.isNaN(Number(column.width)) ?  column.width + 'px' : 'auto';
    //need to add inline styles here
    let $cell = $('<td role="gridcell"></td>');
    let $innerItem = $('<div class="cell"></div>');

    //will need to work on a full width system here basically introduce the maxwidth as width or provided value
    $innerItem.addClass(cellClass);
    $innerItem.css('width', strWidth);

    $innerItem = _this.formatCells(data, column, $innerItem);

    return $cell.append($innerItem);
  }

  //build header
  function buildHeader() {
    let columnInfo = _this.options.columns,
      $header = $('<thead role="row"></thead>');

    columnInfo.forEach(function(column) {
      let $th = $('<th role="columnheader" tabindex="-1"></th>');
      //add column information
      $th.data('column', column.id);
      $th.text(column.name);
      $th.data('sortable', false);
      $header.append($th);
    });
    return $header;
  }
};

NgGridDemo.prototype.formatCells = function(data, column, cellTemplate) {
  let formatter = column.formatter || null;

  if (!data) {
    return '';
  }
  if (!formatter){
    return data[column.id] === 0 ? 0 : data[column.id] || '';
  }

  if (typeof formatter === 'function') {
    return formatter(data, cellTemplate);
  }

  return formatter;
};

exports.simpleGrid = (NgGridDemo)();
