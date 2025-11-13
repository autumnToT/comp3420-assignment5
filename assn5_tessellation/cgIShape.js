//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {
    
    // fill in your code here.
    // delete the code below first.
    // addTriangle (-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5);
    // addTriangle (-0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5);

    // Front face
    var step = 1.0 / subdivisions;
    for (var i = 0; i < subdivisions; i++){
        for (var j = 0; j < subdivisions; j++){
            var p0_x = i * step - 0.5;
            var p0_y = j * step - 0.5;
            var p1_x = (i + 1) * step - 0.5;
            var p1_y = j * step - 0.5;
            var p2_x = (i + 1) * step - 0.5;
            var p2_y = (j + 1) * step - 0.5;
            var p3_x = i * step - 0.5;
            var p3_y = (j + 1) * step - 0.5;
            addTriangle(p0_x, p0_y, 0.5,   p1_x, p1_y, 0.5,   p2_x, p2_y, 0.5);
            addTriangle(p0_x, p0_y, 0.5,   p2_x, p2_y, 0.5,   p3_x, p3_y, 0.5);
        }
    }

    // Back face
    for (var i = 0; i < subdivisions; i++) {
        for (var j = 0; j < subdivisions; j++) {
            var p0_x = i * step - 0.5;
            var p0_y = j * step - 0.5;
            var p1_x = (i + 1) * step - 0.5;
            var p1_y = j * step - 0.5;
            var p2_x = (i + 1) * step - 0.5;
            var p2_y = (j + 1) * step - 0.5;
            var p3_x = i * step - 0.5;
            var p3_y = (j + 1) * step - 0.5;
            // addTriangle(-p0_x, p0_y, -0.5,   -p2_x, p2_y, -0.5,   -p1_x, p1_y, -0.5);
            // addTriangle(-p0_x, p0_y, -0.5,   -p3_x, p3_y, -0.5,   -p2_x, p2_y, -0.5);
            addTriangle(-p0_x, p0_y, -0.5,   -p1_x, p1_y, -0.5,   -p2_x, p2_y, -0.5);
            addTriangle(-p0_x, p0_y, -0.5,   -p2_x, p2_y, -0.5,   -p3_x, p3_y, -0.5);
        }
    }

    // Top face
    for (var i = 0; i < subdivisions; i++) {
        for (var j = 0; j < subdivisions; j++) {
            var p0_x = i * step - 0.5;
            var p0_z = j * step - 0.5;
            var p1_x = (i + 1) * step - 0.5;
            var p1_z = j * step - 0.5;
            var p2_x = (i + 1) * step - 0.5;
            var p2_z = (j + 1) * step - 0.5;
            var p3_x = i * step - 0.5;
            var p3_z = (j + 1) * step - 0.5;
            // addTriangle(p0_x, 0.5, -p0_z,   p2_x, 0.5, -p2_z,   p1_x, 0.5, -p1_z);
            // addTriangle(p0_x, 0.5, -p0_z,   p3_x, 0.5, -p3_z,   p2_x, 0.5, -p2_z);
            addTriangle(p0_x, 0.5, -p0_z,   p1_x, 0.5, -p1_z,   p2_x, 0.5, -p2_z);
            addTriangle(p0_x, 0.5, -p0_z,   p2_x, 0.5, -p2_z,   p3_x, 0.5, -p3_z);
        }
    }

    // Bottom face
    for (var i = 0; i < subdivisions; i++) {
        for (var j = 0; j < subdivisions; j++) {
            var p0_x = i * step - 0.5;
            var p0_z = j * step - 0.5;
            var p1_x = (i + 1) * step - 0.5;
            var p1_z = j * step - 0.5;
            var p2_x = (i + 1) * step - 0.5;
            var p2_z = (j + 1) * step - 0.5;
            var p3_x = i * step - 0.5;
            var p3_z = (j + 1) * step - 0.5;
            addTriangle(p0_x, -0.5, p0_z,   p1_x, -0.5, p1_z,   p2_x, -0.5, p2_z);
            addTriangle(p0_x, -0.5, p0_z,   p2_x, -0.5, p2_z,   p3_x, -0.5, p3_z);
        }
    }

    // Right face
    for (var i = 0; i < subdivisions; i++) {
        for (var j = 0; j < subdivisions; j++) {
            var p0_z = i * step - 0.5;
            var p0_y = j * step - 0.5;
            var p1_z = (i + 1) * step - 0.5;
            var p1_y = j * step - 0.5;
            var p2_z = (i + 1) * step - 0.5;
            var p2_y = (j + 1) * step - 0.5;
            var p3_z = i * step - 0.5;
            var p3_y = (j + 1) * step - 0.5;
            addTriangle(0.5, p0_y, -p0_z,   0.5, p1_y, -p1_z,   0.5, p2_y, -p2_z);
            addTriangle(0.5, p0_y, -p0_z,   0.5, p2_y, -p2_z,   0.5, p3_y, -p3_z);
        }
    }

    // Left face
    for (var i = 0; i < subdivisions; i++) {
        for (var j = 0; j < subdivisions; j++) {
            var p0_z = i * step - 0.5;
            var p0_y = j * step - 0.5;
            var p1_z = (i + 1) * step - 0.5;
            var p1_y = j * step - 0.5;
            var p2_z = (i + 1) * step - 0.5;
            var p2_y = (j + 1) * step - 0.5;
            var p3_z = i * step - 0.5;
            var p3_y = (j + 1) * step - 0.5;
            // addTriangle(-0.5, p0_y, p0_z,   -0.5, p2_y, p2_z,   -0.5, p1_y, p1_z);
            // addTriangle(-0.5, p0_y, p0_z,   -0.5, p3_y, p3_z,   -0.5, p2_y, p2_z);
            addTriangle(-0.5, p0_y, p0_z,   -0.5, p1_y, p1_z,   -0.5, p2_y, p2_z);
            addTriangle(-0.5, p0_y, p0_z,   -0.5, p2_y, p2_z,   -0.5, p3_y, p3_z);
        }
    }

}


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    // fill in your code here.

    var radius = 0.5;
    var height = 1.0;
    var angleStep = 360.0 / radialdivision;
    var heightStep = height / heightdivision;

    // Top and Bottom Caps
    var topCenterY = height / 2;
    var bottomCenterY = -height / 2;

    for (var i = 0; i < radialdivision; i++) {
        var angle1 = radians(i * angleStep);
        var angle2 = radians((i + 1) * angleStep);
        var p1_x = radius * Math.cos(angle1);
        var p1_z = radius * Math.sin(angle1);
        var p2_x = radius * Math.cos(angle2);
        var p2_z = radius * Math.sin(angle2);
        // addTriangle(0, topCenterY, 0, p2_x, topCenterY, p2_z, p1_x, topCenterY, p1_z);
        addTriangle(0, topCenterY, 0, p1_x, topCenterY, p1_z, p2_x, topCenterY, p2_z);
        addTriangle(0, bottomCenterY, 0, p1_x, bottomCenterY, p1_z, p2_x, bottomCenterY, p2_z);
    }
    
    // Cylindrical Wall
    for (var i = 0; i < radialdivision; i++) {
        var angle1 = radians(i * angleStep);
        var angle2 = radians((i + 1) * angleStep);
        var x1 = radius * Math.cos(angle1);
        var z1 = radius * Math.sin(angle1);
        var x2 = radius * Math.cos(angle2);
        var z2 = radius * Math.sin(angle2);

        for (var j = 0; j < heightdivision; j++) {
            var y_bottom = -height / 2 + j * heightStep;
            var y_top = -height / 2 + (j + 1) * heightStep;
            var v_bottom_1 = { x: x1, y: y_bottom, z: z1 };
            var v_bottom_2 = { x: x2, y: y_bottom, z: z2 };
            var v_top_2 = { x: x2, y: y_top, z: z2 };
            var v_top_1 = { x: x1, y: y_top, z: z1 };
            addTriangle(v_bottom_1.x, v_bottom_1.y, v_bottom_1.z, v_bottom_2.x, v_bottom_2.y, v_bottom_2.z, v_top_2.x, v_top_2.y, v_top_2.z);
            addTriangle(v_bottom_1.x, v_bottom_1.y, v_bottom_1.z, v_top_2.x, v_top_2.y, v_top_2.z, v_top_1.x, v_top_1.y, v_top_1.z);
        }
    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.

    var radius = 0.5;
    var height = 1.0;
    var angleStep = 360.0 / radialdivision;
    var heightStep = height / heightdivision;
    var apexY = height / 2;
    var baseY = -height / 2;

    // Base of the cone
    for (var i = 0; i < radialdivision; i++) {
        var angle1 = radians(i * angleStep);
        var angle2 = radians((i + 1) * angleStep);
        var p1_x = radius * Math.cos(angle1);
        var p1_z = radius * Math.sin(angle1);
        var p2_x = radius * Math.cos(angle2);
        var p2_z = radius * Math.sin(angle2);
        addTriangle(0, baseY, 0, p1_x, baseY, p1_z, p2_x, baseY, p2_z);
    }

    // Conical Surface
    for (var i = 0; i < radialdivision; i++) {
        var angle1 = radians(i * angleStep);
        var angle2 = radians((i + 1) * angleStep);
        
        for (var j = 0; j < heightdivision; j++) {
            var current_y = baseY + j * heightStep;
            var next_y = baseY + (j + 1) * heightStep;
            var r1 = radius * (1 - (j / heightdivision));
            var r2 = radius * (1 - ((j + 1) / heightdivision));
            var x1_1 = r1 * Math.cos(angle1);
            var z1_1 = r1 * Math.sin(angle1);
            var x1_2 = r1 * Math.cos(angle2);
            var z1_2 = r1 * Math.sin(angle2);
            var x2_1 = r2 * Math.cos(angle1);
            var z2_1 = r2 * Math.sin(angle1);
            var x2_2 = r2 * Math.cos(angle2);
            var z2_2 = r2 * Math.sin(angle2);
            var v_bottom_1 = { x: x1_1, y: current_y, z: z1_1 };
            var v_bottom_2 = { x: x1_2, y: current_y, z: z1_2 };
            var v_top_2 = { x: x2_2, y: next_y, z: z2_2 };
            var v_top_1 = { x: x2_1, y: next_y, z: z2_1 };
            addTriangle(v_bottom_1.x, v_bottom_1.y, v_bottom_1.z, v_bottom_2.x, v_bottom_2.y, v_bottom_2.z, v_top_2.x, v_top_2.y, v_top_2.z);
            addTriangle(v_bottom_1.x, v_bottom_1.y, v_bottom_1.z, v_top_2.x, v_top_2.y, v_top_2.z, v_top_1.x, v_top_1.y, v_top_1.z);
        }
    }
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.

    var radius = 0.5;
    for (var j = 0; j < stacks; j++) {
        var phi1 = (j / stacks) * Math.PI;
        var phi2 = ((j + 1) / stacks) * Math.PI;

        for (var i = 0; i < slices; i++) {
            var theta1 = (i / slices) * 2 * Math.PI;
            var theta2 = ((i + 1) / slices) * 2 * Math.PI;
            // Vertex v1 (top-left)
            var x1 = radius * Math.sin(phi1) * Math.cos(theta1);
            var y1 = radius * Math.cos(phi1);
            var z1 = radius * Math.sin(phi1) * Math.sin(theta1);
            // Vertex v2 (top-right)
            var x2 = radius * Math.sin(phi1) * Math.cos(theta2);
            var y2 = radius * Math.cos(phi1);
            var z2 = radius * Math.sin(phi1) * Math.sin(theta2);
            // Vertex v3 (bottom-left)
            var x3 = radius * Math.sin(phi2) * Math.cos(theta1);
            var y3 = radius * Math.cos(phi2);
            var z3 = radius * Math.sin(phi2) * Math.sin(theta1);
            // Vertex v4 (bottom-right)
            var x4 = radius * Math.sin(phi2) * Math.cos(theta2);
            var y4 = radius * Math.cos(phi2);
            var z4 = radius * Math.sin(phi2) * Math.sin(theta2);

            // First triangle of the quad (v1, v2, v4)
            if (j > 0) {
                addTriangle(x1, y1, z1, x2, y2, z2, x4, y4, z4);
            }
            // Second triangle of the quad (v1, v4, v3)
            if (j < stacks - 1) {
                addTriangle(x1, y1, z1, x4, y4, z4, x3, y3, z3);
            }
        }
    }
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

