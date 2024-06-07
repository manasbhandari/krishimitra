import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


const Room = () => {

    const{ roomID } = useParams();

    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 786175357;
         const serverSecret = "a19362b2c25bdf0de743dd9fe8e89fe9";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString() , "Manas");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
       
      });
   
    }


  return (
    <div>
     <div ref={myMeeting}  style={{ width: '100vw', height: '100vh' }}>
     </div>
    </div>
  )
}

export default Room
