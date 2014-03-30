$(function () {
    $list = $('.results-container').find('ul');
    var tmpl = $('#tmplSearchResult').html().replace(/<%/gi, ("{" + "{")).replace(/%>/gi, ("}" + "}"));
    var getRequest = function (term) {
        return {
            "fields": ["slug", "title"],
            "query": {
                "wildcard": {
                    "_all": {
                        "wildcard": term + "*"
                    }
                }
            },
            "highlight": {
                "fields": {
                    "title": {},
                    "content": {
                        "fragment_size": 1,
                        "number_of_fragments": 20
                    }

                }
            },
            "suggest": {
                "suggestions": {
                    "text": term,
                    "term": {
                        "field": "_all",
                        "suggest_mode": "always"
                    }
                }
            },
        };
    };

    $('.global-search-cancel').click(function () {
        $list.empty();
        $('input.global-search').val("").focus();
    });
    
    $('.global-search').on('keyup', function () {
        var q = $(this).val();
        if (!q.trim().length) {
            $list.empty();
            return;
        }
        $.ajax({
            url: '/search/',
            data: JSON.stringify(getRequest(q)),
            type: "POST",
            contentType: 'application/json',
            success: function (resp) {
                if (typeof resp == "string") resp = JSON.parse(resp);
                $list.html(Mustache.render(tmpl, resp));
            }
        });
    })
});