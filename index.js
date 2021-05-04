

$(document).ready(function(){
    $('#checkbox').click(function(event){
      if($(this).is(':checked'))
        $('#rehab').show();
        else
        $('#rehab').hide();
    });
  });

  $(document).ready(function(){
    $('#submit').click(function(event){
        $('#print').show();
        $('#reportParent').show();
    });
  });

  
  window.onload = function sliderBar(){
  let slider = document.getElementById('myRange');
  let output = document.getElementById('sliderValue');

  output.innerHTML = slider.value;
  
  slider.oninput = function(){
      output.innerHTML = this.value;
      document.getElementById('downPayment').innerHTML = document.getElementById('price').value * (100 - output.innerHTML)/100;
      }
        
  }
 
   function expenses(){
      let rent = Number(document.getElementById('income').value);
      let tax = Number(document.getElementById('tax').value);
      let insurance = Number(document.getElementById('insurance').value);
      let maintenance = Number(document.getElementById('maintenance').value);
      let vacancy = Number(document.getElementById('vacancy').value);
      let capEx = Number(document.getElementById('capEx').value);
      let management = Number(document.getElementById('management').value);
      let utility = Number(document.getElementById('utility').value);
      let hoa = Number(document.getElementById('hoa').value);
      let other = Number(document.getElementById('other').value);
      let principle = Number(document.getElementById('myRange').value);
      let purchase = Number(document.getElementById('price').value);
      let interest = Number(document.getElementById('interest').value);
      let loan = Number(document.getElementById('term').value);
      let totalRent = rent * 12;


      let totalExpense = (vacancy + capEx + management + maintenance) / 100 * rent * 12 + (tax + insurance + hoa + other + utility);      
      let p = principle/100*purchase;
      let r = interest/100;
      let upkeepMonth = Number(totalExpense/12);
      let closingCost = Number(document.getElementById('closing').value);
      let downpayment = purchase * (100-principle)/100;
      let repairCost = Number(document.getElementById('repair').value);
      let address = document.getElementById('address').value;
      let city = document.getElementById('city').value;
      let state = document.getElementById('state').value;
      let zipcode = document.getElementById('zip').value;

      let val1 = document.getElementById('address').value;
      let val2 = document.getElementById('city').value;
      let val3 = document.getElementById('state').value;
      let val4 = document.getElementById('zip').value;
      let val5 = document.getElementById('interest').value;
      let val6 = document.getElementById('income').value;
      let val7 = document.getElementById('tax').value;
      let val8 = document.getElementById('insurance').value;
      let val9 = document.getElementById('maintenance').value;
      let val10 = document.getElementById('vacancy').value;
      let val11 = document.getElementById('capEx').value;
      let val12 = document.getElementById('management').value;

      if(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12 == ''){
        alert('Please fill out all required fields');
    } else{
      
        document.getElementById('expense').innerHTML = 'Annual Operating Expense: $' + totalExpense;
        document.getElementById('propertyInfo').innerHTML = address + ', ' + city + ', ' + state + ', ' + zipcode

          if(loan == 30){
            document.getElementById('mortgage').innerHTML = 'Monthyl Mortgage Payment (P & I): $' + ((p*(r/12)*Math.pow((1+r/12),360))/(Math.pow((1+r/12), 360)-1)).toFixed(2);
            document.getElementById('totalMonth').innerHTML = 'Total Monthly Expense: $' + (Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),360))/(Math.pow((1+r/12), 360)-1)).toFixed(2)) + upkeepMonth).toFixed(2);
            document.getElementById('totalAnnual').innerHTML = 'Total Annual Expense: $' + ((Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),360))/(Math.pow((1+r/12), 360)-1)).toFixed(2)) + upkeepMonth).toFixed(2) * 12).toFixed(2);
            document.getElementById('annualNetIncome').innerHTML = 'Net Income: $' + (totalRent - ((Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),360))/(Math.pow((1+r/12), 360)-1)).toFixed(2)) + upkeepMonth).toFixed(2) * 12).toFixed(2)).toFixed(2);
            document.getElementById('ROI').innerHTML = 'ROI: ' + (Number((totalRent - ((Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),360))/(Math.pow((1+r/12), 360)-1)).toFixed(2)) + upkeepMonth).toFixed(2) * 12).toFixed(2)).toFixed(2) / (closingCost + downpayment + repairCost)).toFixed(3) * 100).toFixed(2) + '%';

          } else if(loan == 15){
            document.getElementById('mortgage').innerHTML = 'Monthyl Mortgage Payment (P & I): $' + ((p*(r/12)*Math.pow((1+r/12),180))/(Math.pow((1+r/12), 180)-1)).toFixed(2);
            document.getElementById('totalMonth').innerHTML = 'Total Monthly Expense: $' + (Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),180))/(Math.pow((1+r/12), 180)-1)).toFixed(2)) + upkeepMonth).toFixed(2);
            document.getElementById('totalAnnual').innerHTML = 'Total Annual Expense: $' + ((Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),180))/(Math.pow((1+r/12), 180)-1)).toFixed(2)) + upkeepMonth).toFixed(2) * 12).toFixed(2);
            document.getElementById('annualNetIncome').innerHTML = 'Net Income: $' + (totalRent - ((Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),180))/(Math.pow((1+r/12), 180)-1)).toFixed(2)) + upkeepMonth).toFixed(2) * 12).toFixed(2)).toFixed(2);
            document.getElementById('ROI').innerHTML = 'ROI: ' + (Number((totalRent - ((Number(p*0.006/12) + Number(((p*(r/12)*Math.pow((1+r/12),180))/(Math.pow((1+r/12), 180)-1)).toFixed(2)) + upkeepMonth).toFixed(2) * 12).toFixed(2)).toFixed(2) / (closingCost + downpayment + repairCost)).toFixed(3) * 100).toFixed(2) + '%';
          }
        
          if(principle >= 81){
            document.getElementById('pmi').innerHTML = 'Monthly PMI: $' + (p*0.006/12).toFixed(2);
          } else{
            document.getElementById('pmi').innerHTML = 'Monthly PMI: $0'
          }
        document.getElementById('annualGrossIncome').innerHTML = 'Gross Income: $' + (totalRent);

        
        }
    }

    

    
        
      
        
  
 


  