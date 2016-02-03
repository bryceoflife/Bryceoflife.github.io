$(document).ready(function() {
    function b(a) {
        $(".work--wrapper").addClass("unanimate-work");
        $(".work--wrapper").removeClass("animate-work");
        $("#fabx-button").fadeOut();
        $(".project-button").removeClass("loading");
        setTimeout(function() {
            $(".work--wrapper").css("display", "none");
            $("#fabx-button").removeClass("fabx-appear")
        }, 700)
    }

    function a(a) {
        setTimeout(function() {
            $(".work--wrapper").fadeOut("slow", function() {
                $(".work--wrapper").addClass("unanimate-work");
                $(".work--wrapper").removeClass("animate-work")
            });
            $("#fabx-button").fadeOut();
            $("#fabx-button").removeClass("fabx-appear")
        }, 600)
    }
    $(".imprint").fadeOut(0);
	 $(".imprint").css('visibility','inherit');
    $(function() {
        $("#button-downtime").click(a);
        $("#button-downtime").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--downtime").css("display", "block");
                $("#work--downtime").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--downtime").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-redwood").click(a);
        $("#button-redwood").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--redwood").css("display", "block");
                $("#work--redwood").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--redwood").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-gon").click(a);
        $("#button-gon").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--gon").css("display", "block");
                $("#work--gon").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--gon").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-kate").click(a);
        $("#button-kate").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--kate").css("display", "block");
                $("#work--kate").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--kate").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-steve").click(a);
        $("#button-steve").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--steve").css("display", "block");
                $("#work--steve").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--steve").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-amore").click(a);
        $("#button-amore").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--amore").css("display", "block");
                $("#work--amore").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--amore").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-photography").click(a);
        $("#button-photography").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--photography").css("display", "block");
                $("#work--photography").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--photography").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $("#button-branding").click(a);
        $("#button-branding").click(function() {
            $(".project-button").removeClass("loading");
            $(this).addClass("loading");
            setTimeout(function() {
                $("#work--branding").css("display", "block");
                $("#work--branding").addClass("animate-work");
                $("#fabx-button").fadeIn();
                $("#fabx-button").addClass("fabx-appear");
                $("#work--branding").removeClass("unanimate-work")
            }, 2E3)
        })
    });
    $(function() {
        $(".floating-action-button-close, .work--footer-link").click(b)
    });
    $(function() {
        $(".imprint-link").click(function() {
            $(".imprint").fadeIn()
        })
    });
    $(function() {
        $(".imprint--header-link").click(function() {
            $(".imprint").fadeOut()
        })
    })
});