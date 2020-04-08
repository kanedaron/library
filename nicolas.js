// Use Manual for JS Libraries

// ##I IMPORT
// #EXTERNAL FILE : simple all import
//  import * as nicolas from './nicolas.js' 
//  then in the EXTERNAL FILE : nicolas.foo or nicolas.bar
// #single import
//  import nicolas from './nicolas'
// #default import (can put any name for imported element)
//  import foo from './nicolas'
// #default import + simple all import
//  import foo from './nicolas'
//  import * as fabien from './nicolas'
// ou encore
//  import foo, * as fabien from './nicolas'


// ##II EXPORT
// #constants
// default value
// export default "pronomdefault"
// ou alors 
//  const lpp = a => a.toUpperCase()
//  export default lpp

// nominative value
// export const nicolas="samikaero"
// or
//  const nicolas="samikaero"
//  export nicolas



// #functions, first modern ES6 variant
// export const lpp = a => a.toUpperCase()
// then legacy JS with returned value
// export function upp (a) {return (a.toUpperCase())}
// without returned value
// export function magique () {
//     const mon = 5
//     const lan = 7
//     console.log(`monxlan = ${mon*lan}`)
// }


// ##III TRANSPORT (export something imported)
// export something from 'someModule.js'
// export default from 'someModuleWithDefault.js'



// Function to extract emails from webpages



// function to escape all problematic characters from a Regex
RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};




export RegExp.escape