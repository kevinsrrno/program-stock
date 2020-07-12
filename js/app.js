$(document).ready(function(){
    $.ajax({
      url : "http://localhost/kevin/program%20stock/pages/data.php",
      type : "GET",
      success : function(data){
        console.log(data);
  
        var penerimaan = [];
        var penjualan = [];
        
        for(var i in data) {
          penerimaan.push("UserID " + data[i].terima);
          penjualan.push(data[i].jumlah_jual);
         
        }
  
        var chartdata = {
          labels: userid,
          datasets: [
            {
              label: "penerimaan",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(59, 89, 152, 0.75)",
              borderColor: "rgba(59, 89, 152, 1)",
              pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
              pointHoverBorderColor: "rgba(59, 89, 152, 1)",
              data: facebook_follower
            },
            {
              label: "penjualan",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(29, 202, 255, 0.75)",
              borderColor: "rgba(29, 202, 255, 1)",
              pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
              pointHoverBorderColor: "rgba(29, 202, 255, 1)",
              data: twitter_follower
            },
          
          ]
        };
  
        var ctx = $("#mycanvas");
  
        var LineGraph = new Chart(ctx, {
          type: 'line',
          data: chartdata
        });
      },
      error : function(data) {
  
      }
    });
  });