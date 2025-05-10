---
title: FDC3 2.0
sidebar_label: Abstract
original_id: fdc3-standard
---

**Status:** Superceded  
_**adopted:** 1st July 2022_  
_**released:** 22nd August 2022_  
_**superseded:** 31st August 2023_  

## Abstract

FDC3 aims to provide an open standard for interoperability on the financial desktop. This includes standardized verbs to invoke actions between applications (called "intents"), a standardized data format, an OpenAPI app directory standard, and standardized API operations.

The specifications are informed by agreed business [use cases](use-cases/overview), and implemented and used by leading [financial industry participants](../../users).

The standard currently consists of four complementary parts:

- **[Desktop Agent API](api/spec)**: An API interface for working with a Desktop agent, which acts as launcher and message router (broker) for applications in its domain. 
- **[Intents](intents/spec)**: A set of verbs that, in conjunction with context data acting as nouns, can be used to put together common cross-application workflows on the financial desktop.
- **[Context Data](context/spec)**: A message format for passing common identifiers and data between apps to create a seamless workflow.
- **[App Directory](app-directory/spec)**: A structured repository of information about apps that can be used in an FDC3-enabled desktop.

## Versioning

This Standard defines FDC3 Version 2.0. The differences between this version and earlier ones can be found in the [Changelog](https://github.com/finos/FDC3/blob/main/CHANGELOG.md). 

For more details on FDC3's versioning, deprecation and experimental features policies see the [Compliance page](./fdc3-compliance#versioning).

## Table of Contents

- [Compliance information](fdc3-compliance)
- [Glossary](fdc3-glossary)
- [References](references)
- [Supported Platforms](supported-platforms)
- [API Part](api/spec)
- [Intents Part](intents/spec)
- [Context Data Part](context/spec)
- [App Directory Part](app-directory/spec)
