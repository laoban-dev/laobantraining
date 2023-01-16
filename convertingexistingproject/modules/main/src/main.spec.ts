import { mainValue } from "./main";

describe ( "main", () => {
  it ( "should have a mainValue", () => {
    expect ( mainValue ).toEqual ( "Lib1 lib1Value. Lib2 lib2Value." );
  } );
} )