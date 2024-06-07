// $(function() {
//     $("#datepicker").datepicker({
//         dateFormat: "yy-mm-dd",
//         showAnim: "fadeIn"
//     });

//     const times = [];
//     for (let i = 10; i <= 22; i++) {
//         for (let j = 0; j < 60; j += 30) {
//             const hour = i < 10 ? '0' + i : i;
//             const minute = j === 0 ? '00' : j;
//             times.push(hour + ':' + minute);
//         }
//     }

//     const timepickerPopup = $("#timepicker-popup");
//     times.forEach(time => {
//         const timeDiv = $('<div class="timepicker-time">').text(time);
//         timeDiv.on("click", function() {
//             $("#timepicker").val(time);
//             timepickerPopup.hide();
//         });
//         timepickerPopup.append(timeDiv);
//     });

//     $("#timepicker").on("focus", function() {
//         const offset = $(this).offset();
//         timepickerPopup.css({ top: offset.top + $(this).outerHeight(), left: offset.left });
//         timepickerPopup.show();
//     });

//     $(document).on("click", function(event) {
//         if (!$(event.target).closest("#timepicker, #timepicker-popup").length) {
//             timepickerPopup.hide();
//         }
//     });
// });

$(document).ready(function(){

    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: '0d'
    });
    
    $('.cell').click(function(){
        $('.cell').removeClass('select');
        $(this).addClass('select');
    });
    
    });