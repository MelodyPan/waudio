import { OnInit, Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '產品頁';

  public productList: Array<any> = [
    {
      "id": "9",
      "type": "1",
      "name": "豪華版V908/V108",
      "price": "15,500",
      "intro": "展訊UIS8581<br/>28奈米晶片製程 Cortex-A55<br/>八核心處理器 1.6G 時脈<br/>RAM 2G+ ROM 32G<br/>ANDROID 安卓版本 10.0",
      "describelist": [
        {
          "data": "支援極速秒開機/ QLED高清觸控電容屏1280*720"
        },
        {
          "data": "支援分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "支援車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式48段DSP環繞音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "1",
      "type": "1",
      "name": "旗艦+版W908/W108 ",
      "price": "17,000/19,000",
      "intro": "高通Qualcomm Snapdragon 450 <br/>14奈米製程晶片.Cortex A53<br/>八核心處理器 1.8G 時脈  <br/>RAM 2G/4G + ROM 32G/64G<br/>ANDROID 安卓版本 10.0",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "支援極速秒開機/ QLED高清觸控電容屏1280*720"
        },
        {
          "data": "支援分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "支援車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援HI-FI光纖高音質傳輸/內置正版數位式48段DSP環繞音效處理器"
        },
        {
          "data": "支援HDMI色彩鮮豔高清影像傳輸"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        },
        {
          "data": "支援安裝360(3D)全景(選配)",
          "datalist": [
            {
              "data": "鏡頭視角 : ＞180° IP67防水"
            },
            {
              "data": "錄影畫素 : 1080P 無光夜視"
            },
            {
              "data": "鏡頭規格 : SONY六片鏡頭組 1.9大光圈"
            },
            {
              "data": "圖像感測器 : SONY IMX 253"
            },
            {
              "data": "全景範圍 : 3-5米"
            }
          ]
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "5",
      "type": "1",
      "name": "創世紀12.3吋PLUS+",
      "price": "26,000",
      "intro": "方易通UIS7862 跑分高達18萬分<br/>12奈米晶片製程 Cortex-A75 x2 + A55 x6<br/>八核心處理器 1.8G時脈<br/>RAM 4G +ROM 64G<br/>ANDROID 安卓版本 10.0<br/>螢幕尺寸:12.3吋",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "極速秒開機/ QLED高清觸控藍光屏1920*720"
        },
        {
          "data": "分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式16段DSP音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        }
      ],
      "adaptcar": [
        {
          "brand": "TOYOTA",
          "model": "Auris / Corolla Altis / Corolla Cross",
          "year": "2019+"
        },
        {
          "brand": "TOYOTA",
          "model": "RAV4",
          "year": "2019"
        },
        {
          "brand": "MAZDA",
          "model": "CX-5",
          "year": "2013~2016"
        },
        {
          "brand": "HONDA",
          "model": "Accord 8代",
          "year": "2008~2013"
        },
        {
          "brand": "HONDA",
          "model": "Accord 10代",
          "year": "2018-"
        },
        {
          "brand": "KIA",
          "model": "K5",
          "year": "2016~2019"
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/>適用車款: 陸續上市，歡迎電洽了解。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE'  style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "2",
      "type": "1",
      "name": "賓士專用安卓機 10.25 / 12.3吋屏",
      "price": "25,000/28,000",
      "intro": "高通Qualcomm Snapdragon 625 <br/>14奈米製程晶片.Cortex A53<br/>八核心處理器 2G時脈<br/>RAM 4G + ROM 64G<br/>ANDROID 安卓版本 10.0",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "極速秒開機/ QLED高清觸控藍光屏1920*720"
        },
        {
          "data": "分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式16段DSP音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        },
        {
          "data": "BENZ主機: 螢幕規格8.4吋/9吋/10.25吋/12.3吋"
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/>備註:安裝進口車款系列，須提供年份/原車內裝圖及螢幕選單/協助配對螢幕尺寸大小。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "3",
      "type": "1",
      "name": "寶馬專用安卓機 10.25 / 12.3吋屏",
      "price": "25,000/28,000",
      "intro": "高通Qualcomm Snapdragon 625<br/>14奈米製程晶片.Cortex A53<br/> 八核心處理器 2G時脈<br/>RAM 4G + ROM 64G<br/>ANDROID 安卓版本 10.0",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "極速秒開機/ QLED高清觸控藍光屏1920*720"
        },
        {
          "data": "分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式16段DSP音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        },
        {
          "data": "BMW主機: 螢幕規格8.8吋/10.25吋/12.3吋"
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/>備註:安裝進口車款系列，須提供年份/原車內裝圖及螢幕選單/協助配對螢幕尺寸大小。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "10",
      "type": "1",
      "name": "LEXUS",
      "price": "25,000",
      "intro": "高通Qualcomm Snapdragon MSM8953<br/>14奈米製程晶片.Cortex A53 <br/>八核心處理器 2G時脈<br/>RAM 8G + ROM 64G<br/>ANDROID 安卓版本 10.0",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "支援極速秒開機/ QLED高清觸控藍光屏1920*720"
        },
        {
          "data": "分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式16段DSP音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        },
        {
          "data": "LEXUS車機須提供:原車高/低配規格、螢幕選單及鼠標按鍵內裝圖",
          "point": true
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/>備註:安裝進口車款系列，須提供年份/原車內裝圖及螢幕選單/協助配對螢幕尺寸大小。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "4",
      "type": "1",
      "name": "MAZDA專用安卓機",
      "price": "25,000",
      "intro": "方易通UIS7862 跑分高達18萬分<br/>12奈米晶片製程 Cortex-A75 x2 + A55 x6<br/>八核心處理器 1.8G時脈<br/>RAM 4G +ROM 64G<br/>ANDROID 安卓版本 10.0<br/>螢幕尺寸:10.25吋",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "極速秒開機/ QLED高清觸控藍光屏1920*720"
        },
        {
          "data": "分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式16段DSP音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/>備註:安裝進口車款系列，須提供年份/原車內裝圖及螢幕選單/協助配對螢幕尺寸大小。<br/>適用車型: 15-19 M2/3/6/CX-3/5/9 <br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "6",
      "type": "1",
      "name": "歐/美系車 專用機/豎屏機",
      "price": "訂製依實際車款配置報價",
      "intro": "專營： AUDI/ PORSCHE/ CADILLAC/ BENTLEY/…..眾多，<br/>高通Qualcomm Snapdragon MSM8953<br/>14奈米製程晶片A53 2.0GHz<br/>八核心處理器 2G時脈<br/>RAM 8G + ROM 64G<br/>ANDROID 安卓版本 10.0 ",
      "describelist": [
        {
          "data": "無損安裝不破壞原車系統保留原車所有功能"
        },
        {
          "data": "極速秒開機/ QLED高清觸控藍光屏1920*720"
        },
        {
          "data": "分屏操作/ AI語音聲控操作/語音助手"
        },
        {
          "data": "車載A5i正版樂客導航王 (語音聲控版可另選)"
        },
        {
          "data": "支援CARPLAY(有/無線) / ANDROID AUTO(有線)"
        },
        {
          "data": "支援高清倒車影像格式傳輸AHD/TVI/CVBS"
        },
        {
          "data": "支援高音質傳輸/內置數位式16段DSP音效處理器"
        },
        {
          "data": "支援藍芽/藍芽音樂功能/USB*2組"
        },
        {
          "data": "安裝進口車款系列，須提供年份/原車內裝圖及螢幕選單/協助配對螢幕尺寸大小。",
          "point": true
        }
      ],
      "info": "※因應商品規格變化，本司保留修改權益。<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    },
    {
      "id": "8",
      "type": "1",
      "name": "SUP-360 環景系統",
      "price": "25,000",
      "intro": "鏡頭視角 : >180°<br/>錄影畫素 : 1080P 無光夜視<br/>錄影規格 : SONY六片鏡頭組 1.9大光圈<br/>圖像感測器 : -SONY IMX 253<br/>全景範圍 : 3-5米",
      "productparameter": [
        {
          "tile": "鏡頭視角",
          "value": "＞180° IP67防水"
        },
        {
          "tile": "錄影畫素",
          "value": "1080P  帶夜視"
        },
        {
          "tile": "錄影格式",
          "value": "TS碼流"
        },
        {
          "tile": "影片格式",
          "value": "AHD、TVI、AV、VGA"
        },
        {
          "tile": "工作溫度",
          "value": "-20°C~+70°C"
        },
        {
          "tile": "標準輸入電壓",
          "value": "DC9V~16V"
        },
        {
          "tile": "儲存卡容量",
          "value": "內置16G記憶體  最大支持64G"
        },
        {
          "tile": "鏡頭規格",
          "value": "SONY六片鏡頭組 1.9大光圈"
        },
        {
          "tile": "軌跡",
          "value": "內置軌跡"
        },
        {
          "tile": "處理器",
          "value": "MTK八核處理器"
        },
        {
          "tile": "震動器",
          "value": "內置震動器"
        },
        {
          "tile": "全景範圍",
          "value": "3-5米"
        },
        {
          "tile": "圖像感測器",
          "value": "SONY IMX253"
        }
      ],
      "info": "適用於各車款<br/><img src='assets/img/QRCODE.jpg' alt='鑫萬金企業社QRCODE' style='width: 25%;'><br/>LINE :@w-audio 歡迎洽詢。"
    }
  ];

  // private _jsonURL = 'assets/data.json';

  //private http: HttpClient, 
  constructor(private sanitizer: DomSanitizer) {
    // this.getJSON().subscribe(data => {
    //   // console.log(data);
    //   this.productList = data.map((x: any) => ({ ...x, intro: this.sanitizer.bypassSecurityTrustHtml(x.intro) }));
    // });

    this.productList = this.productList.map((x: any) => ({ ...x, intro: this.sanitizer.bypassSecurityTrustHtml(x.intro), info: this.sanitizer.bypassSecurityTrustHtml(x.info) }));
  }
  // public getJSON(): Observable<any> {
  //   return this.http.get(this._jsonURL);
  // }
  ngOnInit() {
    // document.oncontextmenu = function () { return false; };
  }

}
