$(function() {
  "use strict";
  $(function() {
    $(".preloader").fadeOut();
  });
  jQuery(document).on("click", ".mega-dropdown", function(e) {
    e.stopPropagation();
  });
  // ==============================================================
  // This is for the top header part and sidebar part
  // ==============================================================
  var set = function() {
    var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
    var topOffset = 55;
    if (width < 1170) {
      $("body").addClass("mini-sidebar");
      $(".navbar-brand span").hide();
      $(".sidebartoggler i").addClass("ti-menu");
    } else {
      $("body").removeClass("mini-sidebar");
      $(".navbar-brand span").show();
    }
    var height =
      (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      $(".page-wrapper").css("min-height", height + "px");
    }
  };
  $(window).ready(set);
  $(window).on("resize", set);
  // ==============================================================
  // Theme options
  // ==============================================================
  $(".sidebartoggler").on("click", function() {
    if ($("body").hasClass("mini-sidebar")) {
      $("body").trigger("resize");
      $("body").removeClass("mini-sidebar");
      $(".navbar-brand span").show();
    } else {
      $("body").trigger("resize");
      $("body").addClass("mini-sidebar");
      $(".navbar-brand span").hide();
    }
  });
  // this is for close icon when navigation open in mobile view
  $(".nav-toggler").click(function() {
    $("body").toggleClass("show-sidebar");
    $(".nav-toggler i").toggleClass("ti-menu");
    $(".nav-toggler i").addClass("ti-close");
  });
  $(".search-box a, .search-box .app-search .srh-btn").on("click", function() {
    $(".app-search").toggle(200);
  });
  // ==============================================================
  // Right sidebar options
  // ==============================================================
  $(".right-side-toggle").click(function() {
    $(".right-sidebar").slideDown(50);
    $(".right-sidebar").toggleClass("shw-rside");
  });
  // ==============================================================
  // This is for the floating labels
  // ==============================================================
  $(".floating-labels .form-control")
    .on("focus blur", function(e) {
      $(this)
        .parents(".form-group")
        .toggleClass("focused", e.type === "focus" || this.value.length > 0);
    })
    .trigger("blur");

  // ==============================================================
  //tooltip
  // ==============================================================
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // ==============================================================
  //Popover
  // ==============================================================
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  // ==============================================================
  // Perfact scrollbar
  // ==============================================================
  $(
    ".scroll-sidebar, .right-side-panel, .message-center, .right-sidebar"
  ).perfectScrollbar();
  $("#chat, #msg, #comment, #todo").perfectScrollbar();
  // ==============================================================
  // Resize all elements
  // ==============================================================
  $("body").trigger("resize");
  // ==============================================================
  // To do list
  // ==============================================================
  $(".list-task li label").click(function() {
    $(this).toggleClass("task-done");
  });
  // ==============================================================
  // Collapsable cards
  // ==============================================================
  $('a[data-action="collapse"]').on("click", function(e) {
    e.preventDefault();
    $(this)
      .closest(".card")
      .find('[data-action="collapse"] i')
      .toggleClass("ti-minus ti-plus");
    $(this)
      .closest(".card")
      .children(".card-body")
      .collapse("toggle");
  });
  // Toggle fullscreen
  $('a[data-action="expand"]').on("click", function(e) {
    e.preventDefault();
    $(this)
      .closest(".card")
      .find('[data-action="expand"] i')
      .toggleClass("mdi-arrow-expand mdi-arrow-compress");
    $(this)
      .closest(".card")
      .toggleClass("card-fullscreen");
  });
  // Close Card
  $('a[data-action="close"]').on("click", function() {
    $(this)
      .closest(".card")
      .removeClass()
      .slideUp("fast");
  });
  // ==============================================================
  // Color variation
  // ==============================================================

  var mySkins = [
    "skin-default",
    "skin-green",
    "skin-red",
    "skin-blue",
    "skin-purple",
    "skin-megna",
    "skin-default-dark",
    "skin-green-dark",
    "skin-red-dark",
    "skin-blue-dark",
    "skin-purple-dark",
    "skin-megna-dark"
  ];
  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof Storage !== "undefined") {
      return localStorage.getItem(name);
    } else {
      window.alert(
        "Please use a modern browser to properly view this template!"
      );
    }
  }
  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      window.alert(
        "Please use a modern browser to properly view this template!"
      );
    }
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function(i) {
      $("body").removeClass(mySkins[i]);
    });
    $("body").addClass(cls);
    store("skin", cls);
    return false;
  }

  function setup() {
    var tmp = get("skin");
    if (tmp && $.inArray(tmp, mySkins)) changeSkin(tmp);
    // Add the change skin listener
    $("[data-skin]").on("click", function(e) {
      if ($(this).hasClass("knob")) return;
      e.preventDefault();
      changeSkin($(this).data("skin"));
    });
  }
  setup();
  $("#themecolors").on("click", "a", function() {
    $("#themecolors li a").removeClass("working"), $(this).addClass("working");
  });

  // For Custom File Input
  $(".custom-file-input").on("change", function() {
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this)
      .next(".custom-file-label")
      .html(fileName);
  });

  //For Datatables
  $('#zero_config').DataTable();  
  $('#zero_config2').DataTable();  
  $('#zero_config3').DataTable();  
  $('#zero_config4').DataTable();  
  $('#zero_config5').DataTable();  
  $('#zero_config6').DataTable();  
  $('#zero_config7').DataTable();  

  // Switchery
  var elems = Array.prototype.slice.call(
    document.querySelectorAll(".js-switch")
  );
  $(".js-switch").each(function() {
    new Switchery($(this)[0], $(this).data());
  });
  // For select 2
  $(".select2").select2();
  $(".selectpicker").selectpicker();
  //Bootstrap-TouchSpin
  $(".vertical-spin").TouchSpin({
    verticalbuttons: true
  });
  var vspinTrue = $(".vertical-spin").TouchSpin({
    verticalbuttons: true
  });
  if (vspinTrue) {
    $(".vertical-spin")
      .prev(".bootstrap-touchspin-prefix")
      .remove();
  }
  $("input[name='tch1']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    postfix: "%"
  });
  $("input[name='tch2']").TouchSpin({
    min: -1000000000,
    max: 1000000000,
    stepinterval: 50,
    maxboostedstep: 10000000,
    prefix: "$"
  });
  $("input[name='tch3']").TouchSpin();
  $("input[name='tch3_22']").TouchSpin({
    initval: 40
  });
  $("input[name='tch5']").TouchSpin({
    prefix: "pre",
    postfix: "post"
  });
  // For multiselect
  $("#pre-selected-options").multiSelect();
  $("#optgroup").multiSelect({
    selectableOptgroup: true
  });
  $("#public-methods").multiSelect();
  $("#select-all").click(function() {
    $("#public-methods").multiSelect("select_all");
    return false;
  });
  $("#deselect-all").click(function() {
    $("#public-methods").multiSelect("deselect_all");
    return false;
  });
  $("#refresh").on("click", function() {
    $("#public-methods").multiSelect("refresh");
    return false;
  });
  $("#add-option").on("click", function() {
    $("#public-methods").multiSelect("addOption", {
      value: 42,
      text: "test 42",
      index: 0
    });
    return false;
  });
  $(".ajax").select2({
    ajax: {
      url: "https://api.github.com/search/repositories",
      dataType: "json",
      delay: 250,
      data: function(params) {
        return {
          q: params.term, // search term
          page: params.page
        };
      },
      processResults: function(data, params) {
        // parse the results into the format expected by Select2
        // since we are using custom formatting functions we do not need to
        // alter the remote JSON data, except to indicate that infinite
        // scrolling can be used
        params.page = params.page || 1;
        return {
          results: data.items,
          pagination: {
            more: params.page * 30 < data.total_count
          }
        };
      },
      cache: true
    },
    escapeMarkup: function(markup) {
      return markup;
    }, // let our custom formatter work
    minimumInputLength: 1
    //templateResult: formatRepo, // omitted for brevity, see the source of this page
    //templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
  });

  $("#login_yes").on('click',function() {
    console.log("clicked");
      $("#form_input_user").fadeIn();
      // $("#form_input_user").css("display","block");
  });
  $("#login_no").on('click',function() {
    console.log("clicked");
      $("#form_input_user").fadeOut();
      // $("#form_input_user").css("display","none");

  });

});
