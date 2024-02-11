function openNav() {
    document.getElementById("back").style.width = "100%";
    document.getElementById("toExpand").style.width = "50%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("back").style.width = "0%";
    document.getElementById("toExpand").style.width = "0%";
  }

  let WikiOpen = false;

  function toggleWiki() {
    WikiOpen = !WikiOpen;
    if (WikiOpen) {
    document.getElementById("wiki_dropdown").style.height = "95px";
    }
    else {
    document.getElementById("wiki_dropdown").style.height = "0px";
    }
  }

  let AboutOpen = false;

  function toggleAbout() {
    AboutOpen = !AboutOpen;
    if (AboutOpen) {
    document.getElementById("about_dropdown").style.height = "95px";
    }
    else {
    document.getElementById("about_dropdown").style.height = "0px";
    }
  }

  let VideosOpen = false;

  function toggleVideos() {
    VideosOpen = !VideosOpen;
    if (VideosOpen) {
    document.getElementById("videos_dropdown").style.height = "95px";
    }
    else {
    document.getElementById("videos_dropdown").style.height = "0px";
    }
  }

  let ProjectsOpen = false;

  function toggleProjects() {
    ProjectsOpen = !ProjectsOpen;
    if (ProjectsOpen) {
    document.getElementById("projects_dropdown").style.height = "95px";
    }
    else {
    document.getElementById("projects_dropdown").style.height = "0px";
    }
  }

  let LeetCodeOpen = false;

  function toggleLeetCode() {
    LeetCodeOpen = !LeetCodeOpen;
    if (LeetCodeOpen) {
    document.getElementById("leetcode_dropdown").style.height = "90px";
    }
    else {
    document.getElementById("leetcode_dropdown").style.height = "0px";
    }
  }