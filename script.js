let Data = {"Title": "", "URL": ""}

chrome.tabs.query({
    active: true,
    currentWindow: true,
},tabs=>{
    const tab = tabs[0]
    Data.Title = tab.title;
    Data.URL = tab.url;
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
    let link = document.getElementById('link');
    // ArvixurlをAr5ivに変更する
    let url = Data.URL.replace('arxiv.org','ar5iv.org');
    link.setAttribute('href', url);
});
