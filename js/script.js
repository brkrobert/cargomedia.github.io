$(function () {
    $(document).ready(function () {
        function t() {
            var e = $(window).height(),
                t = $(window).width();

            if (r.size() > 0) {
                var n = parseInt(r.data("defW")),
                    i = parseInt(r.data("defH"));
                if (i > 0 && e > 0) {
                    if (n / i > t / e) {
                        var s = t - e / i * n;
                        r.css({
                            width: "auto",
                            height: e + "px"
                        });
                        if (s < 0) {
                            r.css({
                                left: s / 2 + "px",
                                top: 0
                            })
                        } else {
                            r.css({
                                left: 0,
                                top: 0
                            })
                        }
                    } else {
                        var o = e - t / n * i;
                        r.css({
                            width: t + "px",
                            height: "auto"
                        });
                        if (o < 0) {
                            r.css({
                                top: o / 2 + "px",
                                left: 0
                            })
                        } else {
                            r.css({
                                left: 0,
                                top: 0
                            })
                        }
                    }
                }
            }
        }

        function n(e) {
            var t = new Image;
            t.src = e;
            return {
                height: t.height,
                width: t.width
            }
        }

        function o() {
            t()
        }
        $(function () {
            $("#image-grid").gridrotator({
                rows: 7,
                columns: 10,
                animSpeed: 1000,
                interval: 1000,
                step: 6,
                w1400: {
                    rows: 9,
                    columns: 8
                },
                w1200: {
                    rows: 8,
                    columns: 7
                },
                w1024: {
                    rows: 8,
                    columns: 6
                },
                w768: {
                    rows: 12,
                    columns: 5
                },
                w480: {
                    rows: 8,
                    columns: 4
                },
                w320: {
                    rows: 8,
                    columns: 3
                },
                w240: {
                    rows: 8,
                    columns: 2
                }
            })
        });

    })
})