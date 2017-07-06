(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG1edlplB2NWcgBcVD8GMlU8Vm5QMl56BGVTNwUhVWIEcAknW2kGdA49BVkOZVFlVD0FMVU7XnoBaAJmV2BbaARdXm1aZQc7VjYAMVRuBnBVcVY7UGZeMgRbUyMFIVU6BDMJY1swBiEOLAV\/DnxRZFQ9BXI=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oOJgA\/AGQBJQFdUjlWYlM6ATlYOgMnB2ZRNQMnBjFTJw8hDT8EdlVmBFhUP1RgWjMFMVg2AiZQOQBkATYBMgNaDj4ALgBsAScBXVIlVnRTawE9WGcDdQdzUSEDdAZnUxQPcA1kBENVJgQ1VBBUaFprBXBYewJlUCIALgEwASADYQ46AHUAbwEyAXZSdVY0U0EBZVhrA2wHIlFjAxcGJ1M9DzoNIQRaVWYEalQyVFtabAV9WFACaVA0ACUBYAEVA2AOMAA2AF4BPgFmUnVWNVNDATZYPgMwBzNRdwM4BjBTMA80DQkEbFVnBDpUYFQ2WjYFIlh\/AmxQMQBuAQwBOgN1DmkAaAAzAWcBMlJ2VnJTfgFwWGoDPAdk","r":"0.0012800000"}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();