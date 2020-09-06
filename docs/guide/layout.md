# Layout

## Flex

All component in React Native is a flex layout. So what you need to do is just modify the flex container props and the children

| class       | style                         |
| ----------- | ----------------------------- |
| flexInitial | flexGrow: 0, flexShrink: 1    |
| flex1       | flex: 1                       |
| flexAuto    | flexGrow: 1, flexShrink: 1    |
| row         | flexDirection: row            |
| rowReverse  | flexDirection: row-reverse    |
| col         | flexDirection: column         |
| colReverse  | flexDirection: column-reverse |
| nowrap      | flexWrap: nowrap              |
| wrap        | flexWrap: wrap                |
| wrapReverse | flexWrap: wrap-reverse        |

## Align Item

| class         | style                  |
| ------------- | ---------------------- |
| alignStretch  | alignItems: stretch    |
| alignStart    | alignItems: flex-start |
| alignCenter   | alignItems: center     |
| alignEnd      | alignItems: flex-end   |
| alignBaseline | alignItems: baseline   |

## Align Content

| class               | style                       |
| ------------------- | --------------------------- |
| alignContentStart   | alignContent: flex-start    |
| alignContentCenter  | alignContent: center        |
| alignContentEnd     | alignContent: flex-end      |
| alignContentBetween | alignContent: space-between |
| alignContentAround  | alignContent: space-around  |

## Align Self

| class            | style                 |
| ---------------- | --------------------- |
| alignSelfAuto    | alignSelf: auto       |
| alignSelfStart   | alignSelf: flex-start |
| alignSelfCenter  | alignSelf: center     |
| alignSelfEnd     | alignSelf: flex-end   |
| alignSelfStretch | alignSelf: stretch    |

## Justify Content

| class          | style                         |
| -------------- | ----------------------------- |
| justifyStart   | justifyContent: flex-start    |
| justifyCenter  | justifyContent: center        |
| justifyEnd     | justifyContent: flex-end      |
| justifyBetween | justifyContent: space-between |
| justifyAround  | justifyContent: space-around  |

## Flex Grow & Shrink

| class       | style         |
| ----------- | ------------- |
| flexGrow    | flexGrow: 1   |
| flexGrow0   | flexGrow: 0   |
| flexShrink  | flexShrink: 1 |
| flexShrink0 | flexShrink: 0 |

> There is no order property in React Native flex layout, so we are not adding it to the utility.

## Position

Default position for all component in React Native is relative. Adding relative class is optional

| Class    | Style              |
| -------- | ------------------ |
| absolute | position: absolute |
| relative | position: relative |

## Top/Right/Bottom/Left

Reposition the component using top/right/bottom/left/axis class

| Class   | Style                                                        |
| ------- | ------------------------------------------------------------ |
| iyt0    | top: 0                                                       |
| iyr0    | right: 0                                                     |
| iyb0    | bottom: 0                                                    |
| iyl0    | left: 0                                                      |
| iytAuto | top: auto                                                    |
| iybAuto | bottom: auto                                                 |
| iylAuto | left: auto                                                   |
| iyrAuto | right: auto                                                  |
| i0      | top: 0,<br> right: 0,<br> bottom: 0,<br> left: 0             |
| iy0     | top: 0,<br> bottom: 0                                        |
| ix0     | right: 0,<br> left: 0                                        |
| iAuto   | top: auto,<br> right: auto,<br> bottom: auto,<br> left: auto |
| iyAuto  | top: auto,<br> bottom: auto                                  |
| ixAuto  | left: auto,<br> right: auto                                  |

## Z-Index

| Class | Style      |
| ----- | ---------- |
| z0    | zIndex: 0  |
| z10   | zIndex: 10 |
| z20   | zIndex: 20 |
| z30   | zIndex: 30 |
| z40   | zIndex: 40 |
| z50   | zIndex: 50 |
