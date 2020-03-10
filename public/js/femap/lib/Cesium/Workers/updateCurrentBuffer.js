/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
(function () {
/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
(function () {
(function() {

  function clampBetween(v,min,max)
  {
	  if(v <= min)
	  	v = min;
	  
	  if(v >= max)
	  	v = max;
	  	
	  return v;
  }
  
  function equivalent(a,b)
  {
  	  if(Math.abs(a - b) < 0.00001)
  	  	return true;
  	  else
  	  	return false;
  }
  
  function toRadians(d)
  {
      return d * (Math.PI / 180.0);
  }
  
  function magnitude(cartesian)
  {
      return Math.sqrt(cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z);
  }

  function normalize(cartesian,result)
  {
      var mag = magnitude(cartesian);

      result.x = cartesian.x / mag;
      result.y = cartesian.y / mag;
      result.z = cartesian.z / mag;
  }
  
  function multiplyComponents(left,right,result)
  {
      result.x = left.x * right.x;
      result.y = left.y * right.y;
      result.z = left.z * right.z;
  }
  
  function dot(left, right)
  {
      return left.x * right.x + left.y * right.y + left.z * right.z;
  }
  
  function divideByScalar(cartesian, scalar, result) 
  {
      result.x = cartesian.x / scalar;
      result.y = cartesian.y / scalar;
      result.z = cartesian.z / scalar;
      return result;
  };
  
  function multiplyByScalar(cartesian, scalar, result) 
  {
      result.x = cartesian.x * scalar;
      result.y = cartesian.y * scalar;
      result.z = cartesian.z * scalar;
      return result;
  };
  
  function add(left, right, result)
  {
      result.x = left.x + right.x;
      result.y = left.y + right.y;
      result.z = left.z + right.z;
      return result;
  };
  
  function magnitudeSquared(cartesian)
  {
      return cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z;
  };
  
  function checkPointVisible(primitive,pos)
  {
      if(magnitudeSquared(pos) < 1)
  	      return false;
  
      var posDir = new Object();
	  posDir.x = pos.x;
	  posDir.y = pos.y;
	  posDir.z = pos.z; 
  	  normalize(posDir,posDir);
  	  
  	  var camDir = new Object();
	  camDir.x = primitive._camPosition.x;
	  camDir.y = primitive._camPosition.y;
	  camDir.z = primitive._camPosition.z; 
  	  normalize(camDir,camDir);
  	  
  	  var d = dot(posDir,camDir);
  	  d = clampBetween(d,-1,1);
  	  
  	  var angle = Math.acos(d);
  	  
  	  if(angle > primitive._visibleAngle)
  	      return false;
  	  else
  	      return true;
  }
  
  function cartographicToCartesian(cartographic)
  {
      var result = new Object();
  	
  	  var n = new Object();
      var k = new Object();
  	  
  	  var longitude = cartographic.longitude;
      var latitude = cartographic.latitude;
      var cosLatitude = Math.cos(latitude);
      
      var x = cosLatitude * Math.cos(longitude);
      var y = cosLatitude * Math.sin(longitude);
      var z = Math.sin(latitude);
      
      n.x = x;
      n.y = y;
      n.z = z;
      normalize(n, n);
		   
	  var radiiSquared = new Object();
	  radiiSquared.x = 6378137.0 * 6378137.0;
	  radiiSquared.y = 6378137.0 * 6378137.0;
	  radiiSquared.z = 6356752.314245179 * 6356752.314245179;
	  
	  multiplyComponents(radiiSquared, n, k);
	  var gamma = Math.sqrt(dot(n, k));
	  divideByScalar(k, gamma, k);
	  multiplyByScalar(n, cartographic.height, n);
	  
	  add(k, n, result);
	  
	  return result;
  }
  
  function random(min,max)
  {
      var Range = max - min;
  	  var Rand = Math.random();
  	  var num = min + Math.round(Rand * Range);
  	  return num;
  }
  
  function randomParticle(primitive,currentParticle)
  {
      currentParticle.age =  Math.round(random(0.0,primitive._numCurrentPoint - 1));
  	
  	  currentParticle.pos = new Object();
  	  currentParticle.pos.x = random(0.0,primitive._currentData.depthLength - 1);
  	  currentParticle.pos.y = random(primitive._currentMinLat,primitive._currentMaxLat);
  	  currentParticle.pos.z = random(primitive._currentMinLon,primitive._currentMaxLon);
  	  
  	  currentParticle.dir = new Object();
  	  
  	  currentParticle.lastTime = -1;
  	  currentParticle.firstTime = true;
  }
  
  onmessage = function(event)
  {
    var primitive = event.data;
	
	for(var i = 0;i < primitive._currentParticleArr.length;++i)
	{
	    if(primitive._currentParticleArr[i].age < primitive._numCurrentPoint)
		{    
			var visible = checkPointVisible(primitive,primitive._currentParticleArr[i].wPos);
			var alphaIndex = i * primitive._numCurrentPoint;
			for (var j = 0;j < primitive._numCurrentPoint;++j)
			{
			    if(!visible)
				{
				    primitive._alphaArr[alphaIndex + j] = 0;
				}
			    else
				{
				    if(j < primitive._currentParticleArr[i].age)
					{
						var curAlpha = primitive._alphaArr[alphaIndex + j];
						curAlpha -= primitive._currentFadeSpeed;
						curAlpha = clampBetween(curAlpha,0,255);
	
						primitive._alphaArr[alphaIndex + j] = curAlpha;
					}
					else if(j == primitive._currentParticleArr[i].age)
					{
						primitive._alphaArr[alphaIndex + j] = 255;
					}
					else
					{
						primitive._alphaArr[alphaIndex + j] = 0;
					}
				}	
			}
		}
		else
		{
		    var alphaIndex = i * primitive._numCurrentPoint;
	
			if(!equivalent(0,primitive._alphaArr[alphaIndex + primitive._numCurrentPoint - 1]))
			{
				var visible = checkPointVisible(primitive,primitive._currentParticleArr[i].wPos);
			
				for (var j = 0;j < primitive._numCurrentPoint;++j)
				{    
					if(j < primitive._currentParticleArr[i].age)
					{
					    if(!visible)
					    {
					        primitive._alphaArr[alphaIndex + j] = 0;
					    }
						else
						{
						    var curAlpha = primitive._alphaArr[alphaIndex + j];
							curAlpha -= primitive._currentFadeSpeed;
							curAlpha = clampBetween(curAlpha,0,255);
	
							primitive._alphaArr[alphaIndex + j] = curAlpha;
						}
					}
				}
			}
		}
	}
	
    postMessage(primitive._alphaArr);
  };
})();


}());
define("Workers/updateCurrentBuffer", function(){});

}());