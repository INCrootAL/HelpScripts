// standard list change
$(document).ready(function () {
    let selectss = document.querySelectorAll('#popup_job_resume .data-table-contin select[name="' + Newinput.name + '"]');

    for (let selects of selectss) {
        let select = $('select[name="' + selects.name + '"]');

        let selectBoxContainer = $('<div>', {
            width: select.outerWidth(),
            className: 'tzSelect_basic_resum_contin',
            html: '<div class="selectBox_basic_resum_contin" id="selectBox_basic_resum_contin"></div>'
        });

        let dropDown = $('<ul>', {
            className: 'dropDown_basic_resum_contin'
        });

        let selectBox = selectBoxContainer.find('.selectBox_basic_resum_contin');

        select.find('option').each(function (i) {
            let option = $(this);

            if (i == select.attr('selectedIndex')) {
                selectBox.html(option.text());
            }

            if (option.data('skip')) {
                return true;
            }

            let li = $('<li>', {
                html: '<span>' +
                    option.data('html-text') + '</span>'
            });

            li.click(function () {

                selectBox.html(option.text());
                dropDown.trigger('hide');

                for (const lit of document.querySelectorAll('li')) {
                    if (lit.matches('.active')) {
                        lit.classList.remove('active')
                    }
                }

                li.addClass('active')
                select.val(option.val());

                return false;
            });

            dropDown.append(li);
        });

        selectBoxContainer.append(dropDown.hide());
        select.hide().after(selectBoxContainer);

        dropDown.bind('show', function () {

            if (dropDown.is(':animated')) {
                return false;
            }

            selectBox.addClass('expanded');
            dropDown.slideDown();

        }).bind('hide', function () {

            if (dropDown.is(':animated')) {
                return false;
            }

            selectBox.removeClass('expanded');
            dropDown.slideUp();

        }).bind('toggle', function () {
            if (selectBox.hasClass('expanded')) {
                dropDown.trigger('hide');
            } else dropDown.trigger('show');
        });

        selectBox.click(function () {
            dropDown.trigger('toggle');
            return false;
        });

        $(document).click(function () {
            dropDown.trigger('hide');
        });
        if (selects.name == "PROPERTY[80]") {
            document.querySelectorAll(".dropDown_basic_resum_contin")[1].style = "overflow: scroll;"
        } else if (selects.name == "PROPERTY[85]") {
            document.querySelectorAll(".dropDown_basic_resum_contin")[2].style = "overflow: scroll;"
        } else if (selects.name == "PROPERTY[91]") {
            document.querySelectorAll(".dropDown_basic_resum_contin")[3].style = "overflow: scroll;"
        }
    }
})