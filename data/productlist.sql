/*
Navicat MySQL Data Transfer

Source Server         : qingsongdian
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : qingsongdian

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-29 14:04:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `productlist`
-- ----------------------------
DROP TABLE IF EXISTS `productlist`;
CREATE TABLE `productlist` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `foodname` varchar(255) DEFAULT NULL,
  `tablenumber` int(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of productlist
-- ----------------------------
INSERT INTO `productlist` VALUES ('2', '你好', '1', '1');
INSERT INTO `productlist` VALUES ('3', 'ghgt', '3', '3');
INSERT INTO `productlist` VALUES ('4', 'jf', '4', '4');
INSERT INTO `productlist` VALUES ('5', 'dfre', null, null);
INSERT INTO `productlist` VALUES ('6', 'fre', null, null);
INSERT INTO `productlist` VALUES ('7', 'tgtr', null, null);
INSERT INTO `productlist` VALUES ('8', 'gftg', null, null);
INSERT INTO `productlist` VALUES ('9', 'dre', null, null);
INSERT INTO `productlist` VALUES ('10', 'frefr', null, null);
INSERT INTO `productlist` VALUES ('11', 'sdds', null, null);
INSERT INTO `productlist` VALUES ('12', 'wee', null, null);
INSERT INTO `productlist` VALUES ('13', 'dede', null, null);
INSERT INTO `productlist` VALUES ('14', 'efewfr', null, null);
INSERT INTO `productlist` VALUES ('15', 'efrr', null, null);
INSERT INTO `productlist` VALUES ('16', 'undefined', '3', '3');
INSERT INTO `productlist` VALUES ('17', 'undefined', '1', '1');
