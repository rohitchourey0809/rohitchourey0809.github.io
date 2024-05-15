import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav bg-white">
      <div className="nav flex flex-row gap-4">
        <nav className="container mx-auto flex gap-3 justify-between items-center py-4">
          {/* Image Left section */}
          <div className="flex items-center space-x-4">
            <div>
              <img src="" alt="" />
              <li className="brandLogo brandLogo__link">
                <a
                  href="/"
                  className="iaNav__cta"
                  aria-label="Mailchimp Home"
                  data-characterize-click="brand_logo:mailchimp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="brandLogo brandLogo--lockup--animated"
                    aria-label="Mailchimp"
                    width="185"
                    height="60"
                    viewBox="0 0 185 60"
                    role="img"
                  >
                    <g className="brandLogo__freddie">
                      <g className="brandLogo__freddie-outline">
                        <path
                          d="M11.54563,30.98028a5.04364,5.04364,0,0,0-1.182.08,4.96029,4.96029,0,0,0-4.09341,5.76638c.28318,2.67235,3.13228,4.92584,5.76978,4.99292a4.42784,4.42784,0,0,0,.80886-.05371c2.85409-.462,3.60136-3.4031,3.13091-6.292C15.44835,32.21207,13.12358,31.06224,11.54563,30.98028Zm2.79659,7.728a1.19693,1.19693,0,0,1-1.11341.52628A1.50034,1.50034,0,0,1,11.847,37.72026a3.6991,3.6991,0,0,1,.28727-1.47809,1.34249,1.34249,0,0,0-.55068-1.66273,1.55527,1.55527,0,0,0-1.13523-.201,1.45893,1.45893,0,0,0-.92909.6091,3.14563,3.14563,0,0,0-.34045.75986c-.01546.04681-.02773.08347-.03705.10741-.12932.32979-.33568.4262-.47522.4083a.27226.27226,0,0,1-.215-.20145,2.799,2.799,0,0,1,.78977-2.44028,2.55945,2.55945,0,0,1,2.12682-.72794,2.51848,2.51848,0,0,1,1.93113,1.33294,2.91819,2.91819,0,0,1-.23636,2.70255c-.03227.0688-.06182.13179-.08705.18808a1.06609,1.06609,0,0,0-.02727,1.03335.76345.76345,0,0,0,.63341.30477,1.45938,1.45938,0,0,0,.34591-.04616c.14659-.03235.29818-.06578.39045.044A.21685.21685,0,0,1,14.34222,38.70832Z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M48.018,44.18839a14.89179,14.89179,0,0,0,1.01912-4.73159c0-1.99448-1.12925-2.82117-1.84831-2.82117-.022-.077-.16421-.59707-.36008-1.22312a9.835,9.835,0,0,0-.39811-1.067,3.86356,3.86356,0,0,0,.69444-2.81634,3.56386,3.56386,0,0,0-1.03737-2.01292,8.44059,8.44059,0,0,0-3.66342-1.81186c-.20356-.05685-.87448-.2408-.93339-.2588-.00462-.03842-.049-2.1971-.08947-3.12388a10.69427,10.69427,0,0,0-.412-2.74588,7.3516,7.3516,0,0,0-1.90458-3.395c2.32445-2.40607,3.77553-5.05646,3.772-7.33017-.0066-4.37268-5.38446-5.6959-12.0116-2.95551-.00726.00308-1.39437.59027-1.40426.59532-.00616-.00615-2.53857-2.48707-2.5766-2.52044C19.30856-.611-4.31609,25.61063,3.23718,31.97912l1.65069,1.39632a8.09061,8.09061,0,0,0-.459,3.74136A7.3669,7.3669,0,0,0,6.978,41.84751a7.76153,7.76153,0,0,0,5.00217,2.01117c2.93932,6.76383,9.65505,10.913,17.5295,11.14661C37.95653,55.25576,45.04707,51.298,48.018,44.18839Zm1.73378-8.00451a5.03683,5.03683,0,0,1,1.05187,3.27292,16.44267,16.44267,0,0,1-1.13914,5.37081l-.016.04017a18.6299,18.6299,0,0,1-7.63395,8.83185A22.74119,22.74119,0,0,1,30.2641,56.78071h-.00088c-.26687,0-.53791-.00417-.80588-.01208a22.80815,22.80815,0,0,1-11.50666-3.39651,19.69691,19.69691,0,0,1-7.13406-7.83373A9.76285,9.76285,0,0,1,5.80653,43.1681a9.12379,9.12379,0,0,1-3.13541-5.87525,10.1625,10.1625,0,0,1,.19038-3.31968l-.76632-.648a6.00654,6.00654,0,0,1-2.075-4.29037,12.18256,12.18256,0,0,1,.86239-4.97326c1.57308-4.29476,5.19189-9.40874,9.681-13.68022a36.05484,36.05484,0,0,1,6.62209-5.07995A13.74927,13.74927,0,0,1,23.84953,3.155,6.16267,6.16267,0,0,1,28.0256,4.64063c.06617.05774,1.05825,1.028,1.81072,1.7651.18883-.07968.32468-.137.32864-.13851a18.87034,18.87034,0,0,1,7.0457-1.56359c4.49745,0,7.40709,2.41178,7.4128,6.14437.00352,2.30312-1.12727,4.885-3.2119,7.38439a10.19546,10.19546,0,0,1,1.27214,2.84312,12.50348,12.50348,0,0,1,.48252,3.16866c.02023.46142.04089,1.20183.0576,1.85532a9.857,9.857,0,0,1,4.14309,2.20017,5.2896,5.2896,0,0,1,1.50186,2.94607,5.429,5.429,0,0,1-.488,3.235c.04375.12556.08925.26188.13454.40632.03935.126.0765.24739.11123.36263A3.74075,3.74075,0,0,1,49.75182,36.18388Z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M44.39731,34.00012a2.66776,2.66776,0,0,0,.83533-2.11511,1.83938,1.83938,0,0,0-.5256-1.04272,6.55815,6.55815,0,0,0-2.88371-1.38088c-.48437-.13743-.813-.22545-1.16706-.34324-.62967-.20956-.9408-.37831-1.01127-1.57522-.03076-.52346-.12109-2.34706-.1536-3.10059-.05738-1.32044-.21469-3.12529-1.32218-3.87044a1.844,1.844,0,0,0-.94713-.306,1.7718,1.7718,0,0,0-.562.05559,2.96866,2.96866,0,0,0-1.47229.84133,5.03836,5.03836,0,0,1-3.84523,1.29794c-.7752-.03287-1.59666-.15486-2.53833-.21133-.18327-.01081-.367-.02228-.55047-.032a5.075,5.075,0,0,0-4.89033,4.479c-.53913,3.75,2.14691,5.68787,2.92233,6.825a.95371.95371,0,0,1,.21338.50978.81755.81755,0,0,1-.276.53713l.00022.00111a9.67943,9.67943,0,0,0-2.0904,9.017,7.49089,7.49089,0,0,0,.39294,1.09368c1.95993,4.63059,8.04,6.78706,13.98,4.82581a14.49743,14.49743,0,0,0,2.25666-.964A11.86745,11.86745,0,0,0,44.21831,45.931a10.433,10.433,0,0,0,2.87716-5.70485c.17891-1.19338-.08312-1.65529-.43985-1.87743a1.3023,1.3023,0,0,0-.82975-.15308,11.61726,11.61726,0,0,0-.79025-2.724Z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M34.66285,16.11585c.09585.022.15674-.14356.071-.19163a10.74733,10.74733,0,0,0-4.58165-1.199.08336.08336,0,0,1-.06551-.13324,4.66116,4.66116,0,0,1,.86217-.864.08605.08605,0,0,0-.05782-.15388A12.17129,12.17129,0,0,0,25.411,15.50605a.08448.08448,0,0,1-.1297-.08846,6.01219,6.01219,0,0,1,.57991-1.41322.08113.08113,0,0,0-.1086-.11086,22.23963,22.23963,0,0,0-6.2431,5.09444.085.085,0,0,0,.11365.1249A19.08381,19.08381,0,0,1,26.36282,16.138a18.67978,18.67978,0,0,1,8.3-.02217"
                          fill="#fff"
                        ></path>
                        <path
                          d="M27.67124,9.41766S25.61475,7.03683,24.994,6.86122c-3.81929-1.03061-12.06942,4.651-17.33714,12.15746-2.13145,3.03717-5.18266,8.41566-3.72366,11.182a11.15871,11.15871,0,0,0,1.74345,1.67861,6.496,6.496,0,0,1,4.10374-2.61439A33.36,33.36,0,0,1,20.31317,14.48137a53.79185,53.79185,0,0,1,7.35807-5.06371"
                          fill="#fff"
                        ></path>
                      </g>

                      <g className="brandLogo__freddie-fill">
                        <path d="M14.20393,38.6051a.23038.23038,0,0,1,.02319.25959,1.13439,1.13439,0,0,1-1.07.53449,1.48858,1.48858,0,0,1-1.328-1.538,3.95469,3.95469,0,0,1,.2761-1.50142,1.403,1.403,0,0,0-.529-1.68837,1.427,1.427,0,0,0-1.091-.20429,1.39884,1.39884,0,0,0-.89259.61857,3.29879,3.29879,0,0,0-.32738.77164c-.01464.04755-.02645.08489-.0354.109-.12431.3353-.32249.43306-.45677.4151-.06348-.00878-.15077-.05123-.20672-.2047a2.95419,2.95419,0,0,1,.75912-2.47857,2.3805,2.3805,0,0,1,2.04358-.739,2.42374,2.42374,0,0,1,1.85559,1.35347,3.11052,3.11052,0,0,1-.22686,2.7449c-.03113.06959-.05962.13347-.08363.19123a1.13586,1.13586,0,0,0-.02624,1.04938.72037.72037,0,0,0,.60855.30939,1.33436,1.33436,0,0,0,.33226-.04694c.141-.03306.28668-.06694.37519.04449m34.75721.86776a14.918,14.918,0,0,1-1.01243,4.72183C44.99706,51.28918,37.953,55.23878,29.56153,54.98878c-7.82275-.23307-14.49472-4.37368-17.41482-11.12327a7.69092,7.69092,0,0,1-4.96918-2.00694A7.36067,7.36067,0,0,1,4.645,37.13776a8.10686,8.10686,0,0,1,.456-3.73347L3.46107,32.01082C-4.04265,25.65571,19.427-.51082,26.9336,6.05653c.03785.03306,2.55346,2.509,2.55977,2.5151.01-.0051,1.388-.59122,1.395-.59408,6.58386-2.73469,11.9264-1.41428,11.93311,2.949.00346,2.26918-1.43808,4.91408-3.74718,7.3149a7.34556,7.34556,0,0,1,1.8918,3.38775,10.70641,10.70641,0,0,1,.40937,2.74041c.04008.9247.08444,3.079.08891,3.11735.0586.01775.72515.20122.92719.25816a8.37148,8.37148,0,0,1,3.63954,1.80817,3.56037,3.56037,0,0,1,1.03055,2.00857,3.86821,3.86821,0,0,1-.68974,2.8104,9.87064,9.87064,0,0,1,.39553,1.0649c.19431.6249.33571,1.14347.35748,1.22041C47.83924,36.65755,48.96114,37.48245,48.96114,39.47286ZM15.8003,35.5798c-.51029-3.31286-2.74452-4.48041-4.26052-4.56368a4.59539,4.59539,0,0,0-1.13594.081c-2.70585.54755-4.23406,2.85633-3.93335,5.85633a6.06029,6.06029,0,0,0,5.54417,5.071,4.02516,4.02516,0,0,0,.77723-.05469C15.53437,41.50061,16.25239,38.51367,15.8003,35.5798Zm4.62492-21.03A53.44055,53.44055,0,0,1,27.735,9.49673S25.69227,7.121,25.07537,6.94592c-3.79418-1.02878-11.99049,4.641-17.22356,12.13163-2.11745,3.03082-5.14864,8.39816-3.69937,11.15857a11.09842,11.09842,0,0,0,1.73208,1.6751,6.45146,6.45146,0,0,1,4.077-2.60877A33.285,33.285,0,0,1,20.42522,14.5498Zm8.24636,26.21612a2.507,2.507,0,0,0,1.77074,1.85673,7.9735,7.9735,0,0,0,1.395.38c6.00176,1.03551,11.61266-2.40653,12.876-3.27347.09482-.0651.15748-.00163.08139.11327a2.00935,2.00935,0,0,1-.12371.17694c-1.54611,2.00041-5.70266,4.31694-11.11051,4.31612-2.35855-.00041-4.71587-.83388-5.5814-2.11449-1.34286-1.98714-.06654-4.88755,2.171-4.58531.00264.00041.76563.08715.98008.111A20.44025,20.44025,0,0,0,41.313,36.11224c3.05276-1.42142,4.206-2.98571,4.033-4.252a1.82239,1.82239,0,0,0-.52635-1.0353,6.58294,6.58294,0,0,0-2.88613-1.37123c-.48485-.13653-.81385-.22367-1.16829-.34081-.63012-.20817-.94162-.37572-1.01223-1.56429-.03072-.51979-.12106-2.33061-.15381-3.079-.05758-1.31122-.21466-3.10347-1.32353-3.84347a1.85369,1.85369,0,0,0-.94773-.30388,1.7886,1.7886,0,0,0-.56278.05531,2.97762,2.97762,0,0,0-1.47348.83551,5.07015,5.07015,0,0,1-3.84912,1.28878c-.77581-.03245-1.598-.15368-2.54044-.2098-.18332-.01082-.36746-.02224-.55118-.03163A5.06534,5.06534,0,0,0,23.456,26.70816c-.53959,3.72388,2.149,5.64817,2.92519,6.77735a.94255.94255,0,0,1,.21364.50633.8111.8111,0,0,1-.27631.53326v.00123a9.55589,9.55589,0,0,0-2.09221,8.95408,7.40444,7.40444,0,0,0,.39329,1.08612c1.9618,4.59837,8.04758,6.73959,13.99319,4.79184a14.58216,14.58216,0,0,0,2.25885-.95674,11.87435,11.87435,0,0,0,3.45907-2.59306,10.33241,10.33241,0,0,0,2.87982-5.6651c.179-1.18531-.083-1.64367-.44029-1.86429a1.31387,1.31387,0,0,0-.83054-.15224,11.4699,11.4699,0,0,0-.79086-2.7051,17.32336,17.32336,0,0,1-5.66259,2.82489A22.86524,22.86524,0,0,1,31.914,39.068c-1.64194-.13306-2.72823-.61388-3.13679.718a17.69976,17.69976,0,0,0,7.721.78775.13963.13963,0,0,1,.15321.12531.14918.14918,0,0,1-.08667.149S33.515,42.26837,28.67158,40.76592ZM19.73975,19.17143a18.918,18.918,0,0,1,6.69557-2.96837,18.47753,18.47753,0,0,1,8.24575-.02224c.095.02183.15565-.14327.07061-.191a10.64255,10.64255,0,0,0-4.55188-1.19674.08313.08313,0,0,1-.06511-.13286,4.64616,4.64616,0,0,1,.85678-.86224.086.086,0,0,0-.05758-.15367,12.05963,12.05963,0,0,0-5.44427,1.928.08387.08387,0,0,1-.12879-.08816,6.01049,6.01049,0,0,1,.576-1.4102.08086.08086,0,0,0-.10784-.11082,22.11786,22.11786,0,0,0-6.20217,5.08408A.0845.0845,0,0,0,19.73975,19.17143ZM35.54463,31.812a.79106.79106,0,0,0,1.03979-.1728c.15137-.293-.06842-.6904-.49116-.8878a.791.791,0,0,0-1.03979.1732C34.90189,31.2174,35.12189,31.6148,35.54463,31.812Zm1.29663-4.7514a3.58063,3.58063,0,0,0,.64021,1.457,4.08008,4.08008,0,0,1,.99558,0,3.08105,3.08105,0,0,0,.04863-1.7912c-.23894-1.0862-.56231-1.7436-1.23052-1.6414C36.62716,25.1874,36.60253,25.9744,36.84126,27.0606Zm1.42148,2.4952a.83885.83885,0,1,0,.60737.8202A.73678.73678,0,0,0,38.26274,29.5558Z"></path>
                      </g>

                      <g className="brandLogo__freddie-eye--winking">
                        <path d="M27.16938,29.45873c-.1066-.015-.152-.0606-.1654-.121-.0414-.1874.2468-.4958.5506-.7184a3.20166,3.20166,0,0,1,3.1138-.3738,2.66774,2.66774,0,0,1,1.1744.9452c.1086.1772.1296.3146.0594.3866-.1094.1154-.3884-.0168-.8426-.216a3.71739,3.71739,0,0,0-1.756-.3782A19.46093,19.46093,0,0,0,27.16938,29.45873Zm4.527.932a1.72168,1.72168,0,0,0-1.5504-.5082,2.14273,2.14273,0,0,0-1.1272.4698.7232.7232,0,0,0-.28841.4504.138.138,0,0,0,.04521.1078.1425.1425,0,0,0,.0974.037,1.80393,1.80393,0,0,0,.4328-.12,3.768,3.768,0,0,1,1.9046-.1978c.2972.0334.4376.052.5028-.05A.16686.16686,0,0,0,31.69638,30.39073Z"></path>
                      </g>

                      <g className="brandLogo__freddie-eye">
                        <path d="M30.85483,30.6631a3.9979,3.9979,0,0,0,.03119-2.045c-.24177-1.08787-.60735-1.70952-1.28489-1.60713s-.69509.97909-.47672,2.07153a3.98983,3.98983,0,0,0,.57616,1.40418c.53911.75237.90469.55765,1.15328.17644Z"></path>
                      </g>
                    </g>

                    <g
                      className="brandLogo__wordMark"
                      transform="translate(58,11) scale(.18)"
                    >
                      <path d="M90.23,114.58c-20.7,0-21.06,22.6-25.96,22.6-1.02,0-1.83-.9-1.83-2.14,0-1.65,.43-3.08,.43-5.75,0-8.11-5.71-14.71-17.68-14.71-10.16,0-17.6,5.09-22.14,14.5-2.3,4.77-2.1,8.09-4.43,8.09-.86,0-1.53-.81-1.53-1.98,0-3.46,3.05-6.62,3.05-14.05,0-1.93-.15-3.56-.46-4.89H0v76.34H26.72v-41.42c0-8.16,3.5-13.39,9.47-13.39,3.96,0,7.48,3.46,7.48,9.79v45.02h26.72v-41.42c0-9.17,4.24-13.39,9.47-13.39,4.38,0,7.48,4.05,7.48,9.79v45.02h26.41v-46.87c0-20.48-8.13-31.15-23.51-31.15Z"></path>
                      <rect
                        x="246.57"
                        y="94.88"
                        width="26.41"
                        height="97.71"
                      ></rect>
                      <path d="M281.69,153.51c0,25.97,16.81,40.92,38.63,40.92,12.51,0,22.07-4.95,27.94-9.77v-25.19c-5.94,4.06-15.08,8.7-24.89,8.7-12.24,0-18.63-5.08-18.63-13.89s7.37-13.74,18.17-13.74c9.78,0,18.75,3.89,25.34,8.4v-26.72c-5.58-4.15-15.43-7.79-27.94-7.79-23.42,0-38.63,14.64-38.63,39.09Z"></path>
                      <path d="M406.43,114.73c-10.74,0-16.96,4.98-21.53,14.2-2.01,4.07-2.16,8.09-4.43,8.09-.85,0-1.53-.79-1.53-1.98,0-4.23,5.04-10.54,5.04-29.16,0-4.68-.46-8.29-1.37-10.84h-23.05v97.56h26.72v-41.09c0-7.7,4.05-13.57,10.23-13.57,4.6,0,7.79,3.74,7.79,9.79v44.87h26.72v-47.79c0-19.94-8.7-30.08-24.58-30.08Z"></path>
                      <path d="M651.63,114.43c-11.81,0-17.84,6.73-21.21,12.95-2.67,4.92-3.06,9.65-5.35,9.65-1.12,0-1.68-.66-1.68-1.98,0-2.34,3.05-6.31,3.05-12.82,0-2.65-.21-4.63-.61-5.95h-20v95.88h26.87v-30.12c3.41,7.28,10.55,12.1,20.31,12.1,17.6,0,29.62-14.52,29.62-39.85,0-23.37-11.14-39.85-30.99-39.85Zm-7.18,62.14c-5.39,0-11.3-5.59-11.3-19.7,0-12.29,4.83-19.54,11.3-19.54,7.44,0,11.6,7.17,11.6,19.54,0,13.75-4.79,19.7-11.6,19.7Z"></path>
                      <path d="M161.49,114.43c-13.8,0-26.44,3.41-35.22,7.78v22.11c10.22-5.52,20.7-9.61,29.89-9.61,9.84,0,14.01,5.19,13.42,12.02-3.97-.41-8.38-.58-13.73-.58-20.9,0-34,8.16-34,25.92,0,14.59,11.36,22.11,23.79,22.11s20.47-5.8,25.3-14.54c2.75-4.98,2.52-8.03,4.31-8.03,.88,0,1.49,.63,1.49,1.61,0,3.19-.91,5.05-.91,9.37,0,4.04,.53,7.44,1.37,9.91h19.21v-40.87c0-23.21-10.62-37.21-34.92-37.21Zm-9,60.99c-4.96,0-7.62-2.17-7.62-5.95,0-4.92,4.63-8.69,16.62-8.69,2.64,0,5.03,.09,7.2,.27-1.06,7.03-7.18,14.37-16.2,14.37Z"></path>
                      <path d="M256.75,44.31V1.48h-18.39V42.12c0,10.07-6.74,16.8-15.59,16.8s-15.59-6.74-15.59-16.8V1.48h-18.36l.1,42.83c0,18.65,14.93,32.29,33.9,32.29s33.93-13.61,33.93-32.29Z"></path>
                      <polygon points="327.77 75.12 346.13 75.12 346.13 18.68 368.04 18.68 368.04 1.48 305.84 1.48 305.84 18.68 327.77 18.68 327.77 75.12"></polygon>
                      <rect
                        x="275.61"
                        y="1.51"
                        width="18.36"
                        height="73.64"
                      ></rect>
                      <polygon points="136.66 75.12 155.02 75.12 155.02 18.68 176.92 18.68 176.92 1.48 114.72 1.48 114.72 18.68 136.66 18.68 136.66 75.12"></polygon>
                      <polygon points="18.36 38.34 18.36 1.51 0 1.51 0 75.14 18.36 75.14 18.36 38.34"></polygon>
                      <path d="M55.57,34.48c0-10.07,6.74-16.8,15.59-16.8s15.59,6.74,15.59,16.8v40.64h18.36l-.05-42.83C105.05,13.63,90.1,0,71.13,0S37.2,13.61,37.2,32.29v42.83h18.36V34.48Z"></path>
                      <path d="M571.17,114.58c-20.7,0-21.06,22.6-25.96,22.6-1.02,0-1.83-.9-1.83-2.14,0-1.65,.43-3.08,.43-5.75,0-8.11-5.71-14.71-17.68-14.71-10.16,0-17.6,5.09-22.14,14.5-2.3,4.77-2.1,8.09-4.43,8.09-.86,0-1.53-.81-1.53-1.98,0-3.46,3.05-6.62,3.05-14.05,0-1.93-.15-3.56-.46-4.89h-19.7v76.34h26.72v-41.42c0-8.16,3.5-13.39,9.47-13.39,3.96,0,7.48,3.46,7.48,9.79v45.02h26.72v-41.42c0-9.17,4.24-13.39,9.47-13.39,4.38,0,7.48,4.05,7.48,9.79v45.02h26.41v-46.87c0-20.48-8.13-31.15-23.51-31.15Z"></path>
                      <path d="M455.59,121.6c-5.6,0-10.03-.81-13.28-2.44v73.44h26.41V119.16c-3.43,1.51-7.51,2.44-13.13,2.44Z"></path>
                      <path d="M455.44,94.43c-10.92,0-16.64,4.83-16.64,10.38,0,5.98,6.77,10.38,16.64,10.38s16.64-4.4,16.64-10.38c0-5.55-5.73-10.38-16.64-10.38Z"></path>
                      <path d="M221.61,121.6c-5.6,0-10.03-.81-13.28-2.44v73.44h26.41V119.16c-3.43,1.51-7.51,2.44-13.13,2.44Z"></path>
                      <path d="M221.46,94.43c-10.92,0-16.64,4.83-16.64,10.38,0,5.98,6.77,10.38,16.64,10.38s16.64-4.4,16.64-10.38c0-5.55-5.73-10.38-16.64-10.38Z"></path>
                    </g>
                  </svg>
                </a>
              </li>
            </div>

            {/* Dropdowns or other content */}
            <div className="drodowndiv"></div>
            <div className="drodowndiv"></div>
            <div></div>
            <div></div>
          </div>

          <div className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              type="button"
            >
              Dropdown button{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="dropdown"
              className={`z-10 ${
                isOpen ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              type="button"
            >
              Dropdown button{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="dropdown"
              className={`z-10 ${
                isOpen ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="/switch-to-mailchimp/" className="iaNav__cta">
              Switch to Mailchimp
            </a>
          </div>
          <div>
            {" "}
            <a href="/pricing/marketing/" className="iaNav__cta">
              Pricing
            </a>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4 ml-40">
            <div>Sales: +1 (800) 315-593</div>
            <div>
              <button className="button-56 bg-rose-50 border border-black rounded-lg text-black font-inter font-medium text-lg h-12 flex items-center justify-center px-10 relative transition duration-200 hover:bg-black hover:text-white focus:outline-none">
                Signup
              </button>
            </div>
            <div>
              <button className="button-56 bg-rose-50 border border-black rounded-lg text-black font-inter font-medium text-lg h-12 flex items-center justify-center px-10 relative transition duration-200 hover:bg-black hover:text-white focus:outline-none">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
