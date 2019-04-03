# yt-storyboard
A simple YouTube storyboard parser. The function accepts three parameters: A string (url) containing the YouTube storyboard spec, a boolean specifying the quality of the storyboard and the duration of the videoclip. The function returns an array with links to the storyboards.

Two of these require the (unofficial) YouTube ```get_video_info``` API, which can be found through: 

```http://www.youtube.com/get_video_info?video_id=9uOMectkCCs&asv=3&el=detailpage&hl=en_US```

Have fun!

## Installation
```npm install yt-storyboard```

## Usage
```storyboard(spec, highQuality, lengthSeconds)```

### Settings
**spec** ```{string}```  
This string is taken from the ```get_video_info``` api and can be found at ```storyboards.playerStoryboardSpecRenderer.spec```

**highQuality** ```{boolean}```  
There are two types of storyboards. The high quality storyboard contains a grid of maximum 25 stills, and a low quality (which is rendered first) which contains a grid of maximum 100 stills. Set ```true``` if you want high quality and ```false``` if you want a low quality grid.

**lengthSeconds** ```{integer}```  
The length is taken from the ```get_video_info``` api and can be found at ```videoDetails.lengthSeconds```

## Usage example
```storyboard('http://i9.ytimg.com/sb/9uOMectkCCs/storyboard3_L$L/$N.jpg?sqp=ovOX_wMGCKW2vKsF|48#27#100#10#10#0#default#rs$AOn4CLCNr0dLoPEuLTmvgQbfRHhohzQoxQ|80#45#102#10#10#10000#M$M#rs$AOn4CLCm3R4Yp_0X1CqEsnZDVTJQHwhJJg|160#90#102#5#5#10000#M$M#rs$AOn4CLAJEdtW7F-Hpv1Vp3IrGoTCTwn7TA', true, 1002)```

## License
MIT