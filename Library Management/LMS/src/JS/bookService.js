
var globtr;

$(document).ready(function(){
    $('#bookTable').DataTable();

    $("#bookmodal").on("hidden.bs.modal", function () {
      clear();
    });
    
    $("#submitstudent").click(function(){
      console.log('You have submitted book form');
     
      let id = document.getElementById('bookId').value;
      let name = document.getElementById('bookName').value;
      let author = document.getElementById('bookAuthor').value;
      let quantity = document.getElementById('bookQuantity').value;
      let issuedate = document.getElementById('bookdatepicker1').value;
      let returndate = document.getElementById('bookdatepicker2').value;
  
      let book = new Book(id, name, author, quantity, issuedate, returndate);
      console.log(book);
  
      let display=new Display();
      if(display.validate(book))
      {
          display.add(book)
          display.show('success','Your book has been successfully added');
          display.clear();
      }
      else{
      }
      
     });

    $('#savestudent').click(function(){
      let bkid=$('#bookId').val();
      let bkname=$('#bookName').val();
      let bkauthor=$('#bookAuthor').val();
      let bkquantity=$('#bookQuantity').val();
      let issuedate=$('#bookdatepicker1').val();
      let returndt=$('#bookdatepicker2').val();
      var tr = globtr;
      console.log(tr);
      tr.find("td:eq(0)").html(bkid);
      tr.find("td:eq(1)").html(bkname);
      tr.find("td:eq(2)").html(bkauthor);
      tr.find("td:eq(3)").html(bkquantity);
      tr.find("td:eq(5)").html(issuedate);
      tr.find("td:eq(6)").html(returndt);

      let display=new Display();
      display.show('success','Your book has been successfully updated');
    });
    $('#first').click(function(){
      $('#savestudent').hide();
      $('#submitstudent').show();
    })
  });
  

    $(function () {
    $("#bookdatepicker1").datepicker();
    });
    
    $(function () {
     $("#bookdatepicker2").datepicker();
    });
        
    function Book(id , name, author, quantity, issuedate, returndate) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.quantity = quantity;
      this.issuedate = issuedate;
      this.returndate = returndate;
  }

  function Display() {

  }
  //
  Display.prototype.add = function (book) {
    console.log('Adding to UI');
    studentTable = document.getElementById('studentTable');
    var uiString = `<tr>
                      <td>${book.id}</td>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.quantity}</td>
                      <td>
                      <button type="button" class="btn btf" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="view(this)">View</button>
                     <button type="button" class="btn btf" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="edit(this)">Edit</button>
                  <button type="button" class="btn btf" id="del" onclick="del(this)">Delete</a></button>
                  </td>
                  <td class="hidden">${book.issuedate}</td>
                  <td class="hidden">${book.returndate}</td>
                    </tr>`;
                    studentTable.innerHTML += uiString;
}
//
Display.prototype.clear = function () {
  let addBook = document.getElementById('addBook');
  addBook.reset();
}


Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
      return false
  }
  else {
      return true;
  }
}

Display.prototype.show = function (type, displaymessage) {

  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible show" role="alert">
          <strong>Message:</strong> ${displaymessage}
          </div>`;
  setTimeout(function () {
      message.innerHTML = ''
  }, 4000);
}

  function edit(element){
    var tr = $(element).closest("tr");
    globtr=tr;
    var bookid = tr.find("td:eq(0)").html();
    var bookname = tr.find("td:eq(1)").html();
    var bookauthor = tr.find("td:eq(2)").html();
    var bookquantity = tr.find("td:eq(3)").html();
    var bookissuedate = tr.find("td:eq(5)").html();
    var bookreturndate = tr.find("td:eq(6)").html();

    $("#bookId").val(bookid);
    $("#bookName").val(bookname);
    $("#bookAuthor").val(bookauthor);
    $("#bookQuantity").val(bookquantity);
    $("#bookdatepicker1").val(bookissuedate);
    $("#bookdatepicker2").val(bookreturndate);
   

    $('#savestudent').show()
      $('#submitstudent').hide()
  }

  function clear(){
    $("#bookId").val("").attr('readonly', false);
      $("#bookName").val("").attr('readonly', false);
      $("#bookAuthor").val("").attr('readonly', false);
      $("#bookQuantity").val("").attr('readonly', false);
      $("#bookdatepicker1").val("").attr('readonly', false);
      $("#bookdatepicker2").val("").attr('readonly', false);
      
      globtr=" ";

      $(function () {
        $("#bookdatepicker1").datepicker();
        });
        
        $(function () {
         $("#bookdatepicker2").datepicker();
        });

  }
 
  function view(element){
    var tr = $(element).closest("tr");
    var bookid = tr.find("td:eq(0)").html();
    var bookname = tr.find("td:eq(1)").html();
    var bookauthor = tr.find("td:eq(2)").html();
    var bookquantity = tr.find("td:eq(3)").html();
    var bookissuedate = tr.find("td:eq(5)").html();
    var bookreturndate = tr.find("td:eq(6)").html();

    $("#bookId").val(bookid).attr('readonly', true);
    $("#bookName").val(bookname).attr('readonly', true);
    $("#bookAuthor").val(bookauthor).attr('readonly', true);
    $("#bookQuantity").val(bookquantity).attr('readonly', true);
    $("#bookdatepicker1").val(bookissuedate).attr('readonly', true);
    $("#bookdatepicker2").val(bookreturndate).attr('readonly', true);
    // $('.ui-datepicker-calendar').css("display","none");
    $( "#bookdatepicker1" ).datepicker("remove");
    $( "#bookdatepicker2" ).datepicker("remove");


    $('#savestudent').hide()
    $('#submitstudent').hide()

  }

  function del(element){
    $(element).closest("tr").remove();
  }

  